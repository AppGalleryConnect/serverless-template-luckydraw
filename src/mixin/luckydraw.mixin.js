// Copyright 2022. Huawei Technologies Co., Ltd. All rights reserved.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//   http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


import * as API from '@/api';
import * as Constants from '@/constants';
import * as Utils from '@/utils';
export const LuckydrawMixin = {
  data() {
    return {
      campaignInfo: null,
      awardList: [],
      winRecordsList: [],
      campaignId: '',
      userId: '',
      accessToken: '',
      award: null,
      remainChances: 0,
      showPopup: false,
      config: {},
    };
  },
  computed: {
    campaignName() {
      return this.campaignInfo?.name ?? '';
    },
    campaignTheme() {
      return this.campaignInfo?.theme ?? '';
    },
  },
  async mounted() {
    this.campaignId = this.$route.query.campaignId;
    this.userId = this.$route.query.userId;
    this.accessToken = sessionStorage.getItem(Constants.SESSIONSTORAGE_KEY_ACCESS_TOKEN);
    await this.getCampaignInfoById();
    this.checkCampaignTime();
    this.checkRemainChances();
  },
  methods: {
    /**
     * Validate campaign time
     * @returns Boolean
     */
    checkCampaignTime() {
      const current = new Date().getTime();
      const startTime = this.campaignInfo?.start_time;
      const endTime = this.campaignInfo?.end_time;
      if (startTime <= current && current <= endTime) {
        return true;
      } else if (current > endTime) {
        Utils.alertDialog('', '活动已结束');
        return false;
      } else if (current < startTime) {
        Utils.alertDialog('', '活动未开始');
        return false;
      }
    },

    /**
     * Validate remain chances
     * @returns Boolean
     */
    checkRemainChances() {
      if (this.remainChances <= 0) {
        Utils.alertDialog('', '您的抽奖次数已用完');
        return false;
      }
      return true;
    },

    /**
     * Get campaign, awards and participations
     */
    async getCampaignInfoById() {
      const res = await API.getCampaignById(this.campaignId, this.userId, this.accessToken);
      if (res?.ret?.code === 0 && res.campaign) {
        this.campaignInfo = res.campaign;
        this.remainChances = Number(res.campaign.limit_times) - Number(res.participations?.length);
        this.awardList = res.awards?.sort((a, b) => a.level - b.level) ?? [];
        this.config = res.config ?? {};
        this.winRecordsList =
          res.winRecords?.map((item) => {
            const awardName = this.awardList.find((a) => a.id === item.awardId)?.name;
            return {
              name: awardName,
              time: item.winTime,
            };
          }) ?? [];
        this.winRecordsList = this.winRecordsList
          .sort((a, b) => {
            return b.time - a.time;
          })
          .map((item) => {
            item.time = this.$moment(item.time).format('YYYY-MM-DD HH:mm:ss');
            return item;
          });
      }
    },

    /**
     * Click the button to participate in raffle
     */
    async startCallBack() {
      this.award = null;
      // check campaign time and chances remaining
      if (!this.checkCampaignTime() || !this.checkRemainChances()) {
        return;
      }
      // start to draw
      try {
        // beginCallback is called
        const beginCallback = Utils.parseCallbackFunc(this.config.beginCallback);
        if (beginCallback) {
          beginCallback();
        }
        this.$refs.panel.play();
        const returnValue = await API.drawRaffle(this.campaignId, this.userId, this.accessToken);
        if (returnValue?.ret?.code === 0 && returnValue.award) {
          this.award = returnValue.award;
          this.$refs.panel.winStop(this.award.level);
          this.getCampaignInfoById();
        } else {
          this.$refs.panel.notWinStop();
        }
        this.remainChances -= 1;
      } catch (error) {
        this.$refs.panel.stop();
        Utils.alertDialog('', '系统错误,请稍后重试', () => {
          this.getCampaignInfoById();
        });
      }
    },

    endCallBack() {
      if (this.config.showPopup !== false) {
        this.showPopup = true;
      }
      // custom callback
      const customCallback = Utils.parseCallbackFunc(this.config.endCallback);
      if (customCallback) {
        customCallback(this.award ? JSON.stringify(this.award) : '');
      }
    },

    closePopup() {
      this.showPopup = false;
    },
  },
};

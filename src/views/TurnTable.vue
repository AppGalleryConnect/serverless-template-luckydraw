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

<template>
  <div class="grid-container" align="center">
    <campaign-title :type="type" :name="campaignName" :chances="remainChances" :win-list="winRecordsList">
    </campaign-title>
    <lucky-wheel-wrapper ref="panel" :award-list="awardList" @start="startCallBack" @end="endCallBack">
    </lucky-wheel-wrapper>
    <campaign-desc :description="campaignTheme" :type="type"></campaign-desc>
    <turn-table-popup v-model="showPopup" :award="award" @click="closePopup()"></turn-table-popup>
  </div>
</template>

<script>
import { CampaignTitle, CampaignDesc, LuckyWheelWrapper, TurnTablePopup } from './components';
import { ENUM_TYPE } from '@/constants';
import { LuckydrawMixin } from '@/mixin';
export default {
  name: 'TurnTable',
  mixins: [LuckydrawMixin],
  components: { CampaignTitle, CampaignDesc, LuckyWheelWrapper, TurnTablePopup },
  data() {
    return {
      type: ENUM_TYPE.TURN_TABLE,
    };
  },
};
</script>
<style scoped lang="scss">
@import '@/style/turn-table.scss';
</style>

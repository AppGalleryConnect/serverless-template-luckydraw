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
  <div>
    <div class="campaign-title" :style="{ fontSize: adaptiveFontSize, paddingTop: adaptiveTitlePadding }">
      {{ name }}
    </div>
    <div class="campaign-remain-chances" :class="type">
      <span> 您还有{{ chances }}次抽奖机会 </span>
      <div class="award-btn" @click="showWinRecords()">
        <div class="award-btn-img" :class="type"></div>
        <span> 中奖记录 </span>
      </div>
    </div>
    <van-popup v-model="showPop" :closeable="true" class="win-records-popup">
      <div>
        <div class="win-records-popup__title">中奖记录</div>
        <div v-if="winList.length">
          <div v-for="item in winList" :key="item.id" class="win-records-popup__item">
            <div class="win-records-popup__item__name">{{ item.name }}</div>
            <div>{{ item.time }}</div>
          </div>
        </div>
        <div v-else>
          <van-empty :image="emptySrc" description="无中奖记录" />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { ENUM_TYPE } from '@/constants';
export default {
  name: 'CampaignTitle',
  props: {
    type: {
      type: String,
      default: () => 'ninegrid',
    },
    name: {
      type: String,
      default: () => '',
    },
    chances: {
      type: Number,
      default: () => 0,
    },
    winList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showPop: false,
    };
  },
  methods: {
    showWinRecords() {
      this.showPop = true;
    },
  },
  computed: {
    adaptiveFontSize() {
      if (this.type === ENUM_TYPE.NINE_GRID) {
        if (this.name.length <= 4) {
          return '50px';
        } else if (this.name.length <= 8 && this.name.length > 4) {
          return '30px';
        } else {
          return '16px';
        }
      } else {
        if (this.name.length <= 4) {
          if (window.screen.height > 812) {
            return '50px';
          } else {
            return '30px';
          }
        } else if (this.name.length <= 8 && this.name.length > 4) {
          return '30px';
        } else {
          return '16px';
        }
      }
    },
    adaptiveTitlePadding() {
      if (window.screen.height < 812) {
        return '25px';
      } else {
        return '50px';
      }
    },
    emptySrc() {
      return require('../../assets/empty.png');
    },
  },
};
</script>

<style lang="scss" scoped>
.campaign-title {
  color: #fff;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 8px;
}
.campaign-remain-chances {
  text-align: center;
  margin-top: 20px;
  position: relative;
}
.campaign-remain-chances.ninegrid {
  color: #fff;
  background-image: url('../../assets/nineGrid-img/wordBg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.campaign-remain-chances.turntable {
  width: 154px;
  height: 26px;
  line-height: 26px;
  background-image: linear-gradient(180deg, #ffc98c 0%, #ffcf9e 100%);
  box-shadow: inset 0px -2px 2px 0px rgba(255, 255, 255, 0.13);
  border-radius: 8px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #d72715;
  font-weight: 400;
}
.award-btn {
  color: #fff;
  font-size: 12px;
  position: absolute;

  right: 20px;
  width: 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  line-height: 16px;
}
.campaign-remain-chances.turntable .award-btn {
  top: -4px;
  right: -72px;
}
.campaign-remain-chances.ninegrid .award-btn {
  top: -8px;
  right: 36px;
}
.award-btn-img {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.award-btn-img.ninegrid {
  background-image: url('../../assets/nineGrid-img/gift.png');
}
.award-btn-img.turntable {
  background-image: url('../../assets/turnTable-img/gift-box.png');
}
.win-records-popup {
  width: 310px;
  min-height: 280px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #fff3ef;
  border-radius: 8px;
}
.win-records-popup__title {
  font-size: 14px;
  color: #202a43;
  font-weight: bolder;
  margin-bottom: 24px;
}
.win-records-popup__item {
  color: #8b5311;
  display: flex;
  justify-content: space-between;
  background: #ffdd9e;
  margin: 5px 18px;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 14px;
}
.win-records-popup__item__name {
  width: 90px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
::v-deep .van-empty__image {
  width: unset;
  height: unset;
}
::v-deep .van-empty__image img {
  width: unset;
  height: unset;
}
</style>

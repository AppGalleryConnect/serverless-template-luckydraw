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
  <div class="lucky-grid-wrap" :style="{ height: realInnerHeight }">
    <LuckyGrid
      class="lucky-grid"
      :width="realNineGridWidth"
      :height="realNineGridWidth"
      ref="LuckyGrid"
      row="3"
      col="3"
      :prizes="prizes"
      :buttons="buttons"
      :blocks="[{ padding: '10px' }]"
      :activeStyle="{ background: 'transparent' }"
      @start="$emit('start')"
      @end="$emit('end')"
    />
  </div>
</template>

<script>
import { NINEGRID_BUTTON_SETTING, NINEGRID_DEFAULT_PRIZE } from '@/constants';
export default {
  props: {
    awardList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      prizes: NINEGRID_DEFAULT_PRIZE,
      buttons: NINEGRID_BUTTON_SETTING,
    };
  },
  computed: {
    realInnerHeight() {
      if (window.screen.height < 812) {
        return '333px';
      } else {
        return '382px';
      }
    },
    realNineGridWidth() {
      if (window.screen.height < 812) {
        return '250px';
      } else {
        return '300px';
      }
    },
  },
  watch: {
    awardList(value) {
      if (value) {
        const prizeDefault = JSON.parse(JSON.stringify(NINEGRID_DEFAULT_PRIZE));
        value.forEach((item, index) => {
          if (!prizeDefault[index]) {
            return;
          }
          prizeDefault[index].fonts[0].text = item.name;
          prizeDefault[index].imgs[1] = {
            src: item.picUrl || require('@/assets/nineGrid-img/gift-box.png'),
            width: '48%',
            top: '30%',
          };
        });
        this.prizes = prizeDefault;
      }
    },
  },
  methods: {
    play() {
      this.$refs.LuckyGrid.play();
    },
    stop(num) {
      this.$refs.LuckyGrid.stop(num);
    },
    winStop(level) {
      this.$refs.LuckyGrid.stop(level - 1);
    },
    notWinStop() {
      const arrNowWin = [0, 1, 2, 3, 4, 5, 6, 7].slice(this.awardList.length);
      const awardNum = arrNowWin[Math.floor(Math.random() * arrNowWin.length)];
      this.$refs.LuckyGrid.stop(awardNum);
    },
  },
};
</script>

<style lang="scss" scoped>
.lucky-grid {
  padding-top: 30px;
}
.lucky-grid-wrap {
  background-image: url('../../assets/nineGrid-img/bg-lights.png');
  z-index: 100;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  padding: 0 48px;
}
</style>

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
  <div class="lucky-wheel-wrap" :style="{ height: realInnerHeight }">
    <LuckyWheel
      class="lucky-wheel"
      ref="LuckyGrid"
      :width="realNineGridWidth"
      :height="realNineGridWidth"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      @start="$emit('start')"
      @end="$emit('end')"
    />
  </div>
</template>

<script>
import { TURNTABLE_DEFAULT_PRIZE, TURNTABLE_BUTTON_SETTING, TURNTABLE_BLOCK_SETTING } from '@/constants';
export default {
  props: {
    awardList: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    if (window.screen.height < 812) {
      this.buttons[0].fonts[0].fontSize = '14px';
    }
  },
  data() {
    return {
      blocks: TURNTABLE_BLOCK_SETTING,
      prizes: TURNTABLE_DEFAULT_PRIZE,
      buttons: TURNTABLE_BUTTON_SETTING,
    };
  },
  watch: {
    awardList(value) {
      if (value) {
        let prizeDefault = [...TURNTABLE_DEFAULT_PRIZE];
        value.forEach((item) => {
          prizeDefault.push({
            fonts: [{ text: item.name, fontColor: '#B26408', lengthLimit: '36px', fontSize: '14px', top: 10 }],
          });
        });
        if (prizeDefault.length > 6) {
          prizeDefault = prizeDefault.slice(-6);
        }
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
      this.$refs.LuckyGrid.stop(level + 5 - this.awardList.length);
    },
    notWinStop() {
      const arrNowWin = [0, 1, 2, 3, 4, 5].slice(0, 6 - this.awardList.length);
      const awardNum = arrNowWin[Math.floor(Math.random() * arrNowWin.length)];
      this.$refs.LuckyGrid.stop(awardNum);
    },
  },
  computed: {
    realInnerHeight() {
      if (window.screen.height < 812) {
        return '333px';
      } else {
        return '350px';
      }
    },
    realNineGridWidth() {
      if (window.screen.height < 812) {
        return '300px';
      } else {
        return '320px';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lucky-wheel-wrap {
  padding-top: 30px;
  background-image: url('../../assets/turnTable-img/decoration.png');
  z-index: 100;
  background-repeat: no-repeat;
  background-size: 100% 40%;
}
</style>

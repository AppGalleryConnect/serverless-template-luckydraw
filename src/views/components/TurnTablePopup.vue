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
  <van-popup v-model="showPopup" class="getReward-popup">
    <div v-if="award" class="getReward" @click="onClick()">
      <div>
        <img class="getReward-img" v-if="award.picUrl" :src="award.picUrl" />
        <img class="getReward-img" v-else src="@/assets/turnTable-img/gift-box.png" />
      </div>
      <div class="getReward-name">获得{{ award.name }}</div>
    </div>
    <div v-else class="notReward">
      <div class="notReward_head">很遗憾，您没有中奖</div>
      <div class="notReward_title"></div>
      <div class="notReward_text">谢谢参与</div>
      <div class="notReward_btn" @click="onClick()">
        我知道了
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: ['modelValue', 'award'],
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  data() {
    return {
      showPopup: false,
    };
  },
  watch: {
    showPopup(newValue) {
      this.$emit('update:modelValue', newValue);
    },
    modelValue(newValue) {
      this.showPopup = newValue;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

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
  <div class="campaign-desc">
    <div v-for="(item, index) in descriptionList" :key="index" class="campaign-desc__content">
      <span class="campaign-desc__content__item">{{ item }}</span>
    </div>
  </div>
</template>

<script>
import { ENUM_TYPE } from '@/constants';
export default {
  name: 'CampaignDesc',
  props: {
    type: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    showGiftBox() {
      return this.type === ENUM_TYPE.TURN_TABLE;
    },
  },
  data() {
    return {
      descriptionList: [],
    };
  },
  watch: {
    description(newValue) {
      this.descriptionList = newValue?.split('\\n') ?? [];
    },
  },
};
</script>

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
    <lucky-grid-wrapper ref="panel" :award-list="awardList" @start="startCallBack" @end="endCallBack">
    </lucky-grid-wrapper>
    <campaign-desc :description="campaignTheme"></campaign-desc>
    <nine-grid-popup v-model="showPopup" :award="award" @click="closePopup()"></nine-grid-popup>
  </div>
</template>

<script>
import { LuckydrawMixin } from '@/mixin';
import { CampaignTitle, CampaignDesc, LuckyGridWrapper, NineGridPopup } from './components';
import { ENUM_TYPE } from '@/constants';
export default {
  name: 'NineGrid',
  mixins: [LuckydrawMixin],
  components: { CampaignTitle, CampaignDesc, LuckyGridWrapper, NineGridPopup },
  data() {
    return {
      type: ENUM_TYPE.NINE_GRID,
    };
  },
};
</script>
<style scoped lang="scss">
@import '@/style/nine-grid.scss';
</style>

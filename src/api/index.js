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

import agconnect from '@agconnect/api';
import * as Constants from '@/constants';

/**
 * Query campaign, awards, winning records and paticipations by campaignId
 * @param {String} campaignId campaign id
 * @param {String} userId user id
 * @param {String} at accessToken
 * @returns Promise<Object> || undefined
 */
export const getCampaignById = async (campaignId, userId, at) => {
  const realFuncName = window.functionNameMap['get-campaign-by-id'];
  const functionCallable = agconnect.function().wrap(`${realFuncName}-$latest`);
  functionCallable.timeout = Constants.CLOUD_FUNC_TIMEOUT;
  const res = await functionCallable.call({ campaignId, accessToken: at, userId });
  return res.getValue();
};

/**
 * Partificate in raffle
 * @param {String} campaignId campaign id
 * @param {String} userId user id
 * @param {String} at accessToken
 * @returns Promise<Object> || undefined
 */
export const drawRaffle = async (campaignId, userId, at) => {
  const reqBody = { campaignId, accessToken: at, userId };
  const realFuncName = window.functionNameMap['draw-raffle'];
  const functionCallable = agconnect.function().wrap(`${realFuncName}-$latest`);
  functionCallable.timeout = Constants.CLOUD_FUNC_TIMEOUT;
  const res = await functionCallable.call(reqBody);
  return res.getValue();
};

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


import { Dialog } from 'vant';

/**
 * custom vant alert dialog
 * @param {String} title dialog title
 * @param {String} message error message
 * @param {Function} onConfirm confirm callback
 */
export const alertDialog = (title, message, onConfirm) => {
  Dialog.alert({
    title,
    message,
    confirmButtonText: '我知道了',
  }).then(() => {
    onConfirm && onConfirm();
  });
};

/**
 * parse callback function by configuration
 * @param {String} funcName funcName registered on window, splitted by dot
 * @returns parsed function
 */
export const parseCallbackFunc = (funcName) => {
  if (!funcName) {
    return null;
  }
  // splitted by dot
  let splits = funcName.split('.');
  if (splits[0] === 'window') {
    splits = splits.slice(1);
  }
  if (!splits.length) {
    return null;
  }
  // find function
  let func = window;
  for (let item of splits) {
    func = func[item];
    if (!func) {
      return null;
    }
  }
  return func;
};

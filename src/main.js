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

import Vue from 'vue';

import i18n from './i18n';

import App from './App.vue';
import router from './router';

import VueLuckyCanvas from '@lucky-canvas/vue';
import agconnect from '@agconnect/api';
import { Popup, Dialog, Empty } from 'vant';
import moment from 'moment';

Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Empty);

import '@agconnect/auth';
import '@agconnect/remoteconfig';
import '@agconnect/cloudstorage';
import '@agconnect/function';
import '@agconnect/instance';

Vue.config.productionTip = false;

Vue.use(VueLuckyCanvas);
moment.locale('zh-cn');
Vue.prototype.$moment = moment;

agconnect.instance().configInstance(window.agConnectConfig);

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');

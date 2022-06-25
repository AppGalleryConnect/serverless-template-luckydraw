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

export const CLOUD_FUNC_TIMEOUT = 10000;
export const SESSIONSTORAGE_KEY_ACCESS_TOKEN = 'luckydraw_access_token';

export const ENUM_TYPE = {
  NINE_GRID: 'ninegrid',
  TURN_TABLE: 'turntable',
};

const DEFAULT_BOX_BG = {
  src: require('../assets/nineGrid-img/no-selected.png'),
  activeSrc: require('../assets/nineGrid-img/selected.png'),
  width: '130%',
  height: '130%',
};

const DEFAULT_AWARD_IMG = {
  src: require('../assets/nineGrid-img/thank.png'),
  width: '40%',
  top: '32%',
};

const NINEGRID_FONT_CONFIG = {
  text: '谢谢参与',
  top: '80%',
  fontSize: '11px',
  fontColor: '#B26408',
};

export const NINEGRID_DEFAULT_PRIZE = [
  {
    x: 0,
    y: 0,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 1,
    y: 0,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 2,
    y: 0,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 2,
    y: 1,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 2,
    y: 2,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 1,
    y: 2,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 0,
    y: 2,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
  {
    x: 0,
    y: 1,
    fonts: [NINEGRID_FONT_CONFIG],
    imgs: [DEFAULT_BOX_BG, DEFAULT_AWARD_IMG],
  },
];

export const NINEGRID_BUTTON_SETTING = [
  {
    x: 1,
    y: 1,
    imgs: [
      {
        src: require('../assets/nineGrid-img/draw-now.png'),
        width: '110%',
        top: '7px',
      },
    ],
  },
];

const TURNTABLE_FONT_CONFIG = {
  text: '谢谢参与',
  fontColor: '#B26408',
  lengthLimit: '36px',
  fontSize: '14px',
  top: 10,
};

export const TURNTABLE_DEFAULT_PRIZE = [
  {
    fonts: [TURNTABLE_FONT_CONFIG],
  },
  {
    fonts: [TURNTABLE_FONT_CONFIG],
  },
  {
    fonts: [TURNTABLE_FONT_CONFIG],
  },
  {
    fonts: [TURNTABLE_FONT_CONFIG],
  },
  {
    fonts: [TURNTABLE_FONT_CONFIG],
  },
  {
    fonts: [TURNTABLE_FONT_CONFIG],
  },
];

export const TURNTABLE_BUTTON_SETTING = [
  {
    fonts: [
      {
        padding: '2px',
        text: '开始\n抽奖',
        fontSize: '14px',
        top: -15,
        fontColor: '#C0751D',
      },
    ],
    radius: '20%',
    imgs: [
      {
        src: require('../assets/turnTable-img/turn-pointer.png'),
        width: '200%',
        top: '-280%',
      },
    ],
  },
];

export const TURNTABLE_BLOCK_SETTING = [
  {
    padding: '42px',
    imgs: [
      {
        src: require('../assets/turnTable-img/bg-lights.png'),
        width: '100%',
        rotate: true,
      },
    ],
  },
];

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import fetch from '../../core/fetch';
import SuperBubble from '../../components/SuperBubble';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Row, Col } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


export default {

  path: '/',
  getInitialState: function () {
    return { time: '2010-11' };
  },
  async action() {
    // const resp = await fetch('/data' + '?time=' + '2010-11', {
    //   method: 'get'
    // });

    return {
      title: 'InfoVis',
      component:
      <div>
        <SuperBubble/>
      </div>,
    };
  },

};

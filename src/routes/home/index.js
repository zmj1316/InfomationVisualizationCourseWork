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
import BubbleChart from '../../components/BubbleChart';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Row, Col } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

var mdata = [
  {
    _id: 0,
    value: 1
  }
]
const dateFormat = 'YYYY/MM/DD';

const monthFormat = 'YYYY/MM';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/data', {
      method: 'post'
    });
    const { data } = await resp.json();
    return {
      title: 'InfoVis',
      component:
      <div>
        <Row>
          <Col span={12}>
            <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
            <br />
          </Col>
        </Row>
        <Row>
          <BubbleChart data={data} />
        </Row>
      </div>,
    };
  },

};

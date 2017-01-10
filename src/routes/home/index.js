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
import AreaChart from '../../components/AreaChart';
import ForceGraph from '../../components/ForceGraph';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Row, Col, Tabs } from 'antd';
const TabPane = Tabs.TabPane;


const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


export default {

  path: '/',
  getInitialState() {
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
    <Tabs defaultActiveKey="1" onChange={(msg) => console.log(msg)}>
      <TabPane tab="关键字" key="1"><SuperBubble /></TabPane>
      <TabPane tab="数目与时间" key="2"><AreaChart /></TabPane>
      <TabPane tab="力导图" key="3"><ForceGraph /></TabPane>
    </Tabs>


  </div>,
    };
  },

};

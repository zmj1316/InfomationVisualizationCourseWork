import React from 'react';
import fetch from '../../core/fetch';
import BubbleChart from '../../components/BubbleChart';
import AsyncModal from '../../components/AsyncModal';
import {getAction} from '../Actions'

import { DatePicker, Modal, Button } from 'antd';
import moment from 'moment';
import { Row, Col } from 'antd';
import s from './style.css';

const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY-M';

// var showModal = false
// var loadAction;

// var onClick = function (item) {
//     console.log(item._id)
//     if (showModal)
//         return
//     showModal = true
//     // fetch('/count' + '?keyword=' + item._id, {
//     //     method: 'get'
//     // }).then((res) => {
//     //     return res.json()
//     // }).then((data)=>{
//     //     console.log(data)
//     // })
// }

var SSS = React.createClass({
    getInitialState: function () {
        return { time: '2010-11', data: [], shouldFetch: true, showModal: false }
    },
    componentDidUpdate: function () {
        if (this.state.shouldFetch) {

            fetch('/data' + '?time=' + this.state.time, {
                method: 'get'
            }).then((res) => {
                return res.json()
            })
                .then((data) => {
                    this.setState({...this.state, data: data.data, shouldFetch: false})
        })
    .catch((error) => {
        console.error(error);
    });
        
        }
    },
onClick: function (item) {
    console.log(getAction())
    getAction()(item)
    if (this.state.showModal)
        return
    this.setState({...this.state, showModal:true})
    // fetch('/count' + '?keyword=' + item._id, {
    //     method: 'get'
    // }).then((res) => {
    //     return res.json()
    // }).then((data)=>{
    //     console.log(data)
    // })
},
onOK: function() {
    console.log('close')
    this.setState({...this.state, showModal:false})
},
render: function () {

    // console.log(this.props)
    return (
        <div>
            <Row>
                <Col>
                    <MonthPicker
                        onChange={(dates, strings) => {
                            if (strings > '2010-0' && strings < '2015-8')
                                this.setState({...this.state, time: strings,shouldFetch:true})
                        }
                        }
                        style = {s.datepick}
                    defaultValue={moment('2010-11', monthFormat)}format={monthFormat}/>
                    <br />
                </Col>
            </Row>
            <Row>{
                (this.state.data.error) ?
                    <H4>{this.state.data.error}</H4> :
                    <BubbleChart data={this.state.data} onClick={this.onClick} />
            }
            </Row>
            <Row>
                <AsyncModal/>
            </Row>
        </div>
    )
}
});


export default (SSS);

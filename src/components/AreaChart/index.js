import React, { PropTypes } from 'react';
import moment from 'moment';
import s from './style.css';
var ReactD3 = require('react-d3-components');

const monthFormat = 'YYYY-MM';
var defaultdata = [{
    label: 'in', values: [
        { x: new Date(), y: 1 },
    ]
}, {
    label: 'out', values: [
        { x: new Date(), y: 1 },
    ]
}]



var SS = React.createClass({
    getInitialState: function () {
        return {
            yearMode: true, month: '2010-01', year: '2010', data: defaultdata, shouldFecth: true,
            xScale: d3.time.scale().domain([new Date(2010, 1, 1), new Date(2016, 1, 1)]).range([0, 1280 - 70]),
            xScaleBrush: d3.time.scale().domain([new Date(2010, 1, 0), new Date(2016, 1, 1)]).range([0, 1280 - 70])
        }
    },
    componentDidMount: function () {
        if (!this.state.shouldFecth)
            return
        this.state.shouldFecth = false
        fetch('/line', {
            method: 'get'
        }).then((res) => {
            return res.json()
        })
            .then((data) => {
                if (data.error) {
                    Modal.warning({
                        title: "没有记录"
                    })
                }
                console.log(data)
                defaultdata[0].values = data.data.map(d => ({
                    x: moment(d.time, monthFormat).toDate(),
                    y: parseInt(d.in)
                }))
                defaultdata[1].values = data.data.map(d => ({
                    x: moment(d.time, monthFormat).toDate(),
                    y: parseInt(d.out)
                }))
                console.log(defaultdata)
                this.setState({ ...this.state, data: defaultdata })
            })
            .catch((error) => {
                console.log(error);
            });
    },
    _onChange: function (extent) {
        this.setState({ ...this.state, xScale: d3.time.scale().domain([extent[0], extent[1]]).range([0, 1280 - 70]) });
    },
    render: function () {
        return (
            <div>
                <ReactD3.AreaChart
                    data={this.state.data}
                    width={1280}
                    height={720}
                    tooltipHtml={(y, cumulative, x) => {
                        return y;
                    } }
                    tooltipMode={'mouse'}

                    xScale={this.state.xScale}
                    xAxis={{ tickValues: this.state.xScale.ticks(d3.time.month, 2), tickFormat: d3.time.format("%y/%m") }}
                    margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
                <div className="brush1">
                    <ReactD3.Brush
                        width={1280}
                        height={50}
                        margin={{ top: 0, bottom: 30, left: 50, right: 20 }}
                        extent={[new Date(2010, 1, 1), new Date(2011, 1, 1)]}
                        onChange={this._onChange}
                        xScale={this.state.xScaleBrush}
                        xAxis={{ tickValues: this.state.xScaleBrush.ticks(d3.time.month, 3), tickFormat: d3.time.format("%y/%m") }}
                        />
                </div>
            </div>
        )
    }
});


export default (SS);

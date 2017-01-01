import React, { PropTypes } from 'react';
import ReactBubbleChart from 'react-bubble-chart';

const colorLegend = [
    // reds from dark to light
    { color: "#a50f15", textColor: '#fee0d2', text: 'Hot' },
    { color: "#cb181d", textColor: '#fee0d2' },
    "#ef3b2c",
    "#fb6a4a",
    "#fc9272",
    "#fcbba1",
    "#fee0d2",
    //neutral grey
    { color: "#f0f0f0", text: 'Neutral' },
    // blues from light to dark
    // "#deebf7",
    // "#c6dbef",
    // "#9ecae1",
    // "#6baed6",
    // "#4292c6",
    // { color: "#2171b5", textColor: '#deebf7' },
    // { color: '#08519c', textColor: '#deebf7' },
    // { color: "#08306b", textColor: '#deebf7', text: 'Positive' }
];

var tooltipProps = [{
    css: 'symbol',
    prop: '_id'
}
// , {
//     css: 'value',
//     prop: 'value',
//     display: 'Last Value'
// }, {
//     css: 'change',
//     prop: 'colorValue',
//     display: 'Change'
// }
];


class BubbleChart extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };


    render() {
        // console.log(this.props)
        return (
            <ReactBubbleChart
                colorLegend={colorLegend}
                legend={true}
                selectedColor="#737373"
                selectedTextColor="#d9d9d9"
                fixedDomain={{ min: -1, max: 0 }}
                data={this.props.data.map(d => ({
                    _id: d._id,
                    value: d.value,
                    colorValue: -d.before,
                    selected: d.select
                }))}
                duration={800}
                delay={15}
                tooltip={true}
                tooltipProps={tooltipProps}
                onClick = {this.props.onClick}
                />
        );
    }
}

export default (BubbleChart);

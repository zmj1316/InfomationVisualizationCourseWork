import React, { PropTypes } from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import s from './style.css';

const colorLegend = [
    // reds from dark to light
    { color: "#67000d", textColor: '#fee0d2', text: 'Negative' },
    { color: "#a50f15", textColor: '#fee0d2' },
    { color: "#cb181d", textColor: '#fee0d2' },
    "#ef3b2c",
    "#fb6a4a",
    "#fc9272",
    "#fcbba1",
    "#fee0d2",
    //neutral grey
    { color: "#f0f0f0", text: 'Neutral' },
    // blues from light to dark
    "#deebf7",
    "#c6dbef",
    "#9ecae1",
    "#6baed6",
    "#4292c6",
    { color: "#2171b5", textColor: '#deebf7' },
    { color: '#08519c', textColor: '#deebf7' },
    { color: "#08306b", textColor: '#deebf7', text: 'Positive' }
];

// export default ({ data }) =>
//   <ReactBubbleChart 
//     colorLegend={colorLegend}
//     legend={true}
//     selectedColor="#737373"
//     selectedTextColor="#d9d9d9"
//     fixedDomain={{min: -1, max: 1}}
//     data={data.map(d => ({
//       _id: d._id,
//       value: d.value,
//       colorValue: d.sentiment,
//       selected: d.selected
//     }))}
//   />

var mdata = [
  {
    _id: 0,
    value: 0.2
  }
]

class BubbleChart extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };


    render() {
        console.log(this.props)
        return (
            <ReactBubbleChart
                colorLegend={colorLegend}
                legend={true}
                selectedColor="#737373"
                selectedTextColor="#d9d9d9"
                fixedDomain={{ min: -1, max: 1 }}
                data={this.props.data.map(d => ({
                    _id: d._id,
                    value: d.value,
                    colorValue: d.value,
                    selected: d.select
                }))}
                />
        );
    }
}

export default (BubbleChart);

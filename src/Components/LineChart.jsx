import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect, useRef } from "react";

export default function Chart({ points }) {

    const [options, setOptions] = useState({
        chart: {
            type: 'areaspline',
            styleMode: true,
            backgroundColor: 'transparent',

        },

        title: {
            text: ""
        },

        xAxis: {
            title: {
                text: "Years",
            },
        },

        yAxis: {
            enabled: false,
        },
        plotOptions:{
            areaspline:{
                color:'#00DD6F',
            }
        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 20,
            style: {
                color: '#0161FF',
            },
            formatter() {
                return `Amount <strong>\u20B9 ${Number(this.y.toFixed(0)).toLocaleString("en-In")}</strong> <br> Year <strong> ${this.x} </strong>`
            }
        },

        legend: {
            enabled: false,
        },

        series: [
            {
                name: 'Simple Interest',
                data: [50000, 100000, 150000, 200000, 250000],
            }
        ],

        credits: {
            enabled: false
        },

    });

    useEffect(() => {
        setOptions(previousState => {
            return ({
                ...previousState, series: {
                    data: points,
                }
            })
        })
    }, points);

    return (
        <div style={{ margin: '4rem 1rem' }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}
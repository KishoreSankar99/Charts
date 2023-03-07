import React from 'react'
import { Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}) {
  return<div className='chart' style={{width:500}}>
    <Line data={chartData}/>
    </div>
}

export default BarChart
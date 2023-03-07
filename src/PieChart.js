import React from 'react'
import { Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}) {
  return<div className='chart' style={{width:500}}>
    <Pie data={chartData}/>
    </div>
}

export default BarChart
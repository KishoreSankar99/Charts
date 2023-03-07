import logo from './logo.svg';
import './App.css';
import {userData} from './Data'
import { useState } from 'react';
import BarChart from './BarChart';
import  PieChart  from './PieChart'
import LineChart from './LineChart'
import { Route,Routes, useNavigate} from 'react-router-dom';


function App() {
  let navigate = useNavigate()
  let [data,setData] = useState({
    labels:userData.map((e)=>e.year),
    datasets:[{
      label:'Users Gained',
      data:userData.map((e)=>e.userGain),
      backgroundColor:['red','green','blue','yellow','pink']
    }]
  })
  return (
    <div className="App">
      <div className='buttonBar'>
      <button onClick={()=>navigate('/piechart')}> PieChart View</button>
      <button onClick={()=>navigate('/linechart')}> LineChart View</button>
      <button onClick={()=>navigate('/barchart')}> BarChart View</button>
      </div>
      <div className='chartView'>
      <Routes>
        <Route path='/barchart' element={<BarChart chartData={data}/>}/>
        <Route path='/piechart' element={<PieChart chartData={data}/>}/>
        <Route path='/linechart' element={<LineChart chartData={data}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

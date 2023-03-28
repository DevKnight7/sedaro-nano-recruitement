import './App.css';
import { data } from './data.js';
import { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

function App () {
  let [ plotData,setPlotData ] = useState();

  const generateXYCoordinates = () => {
    // Extract x and y co-ordinates from the states
    let dataItems = {};
    for (let frame of data) {
      let {x,y} = frame[Object.keys(frame)];
      let agentId = Object.keys(frame)[0];
      dataItems[agentId] = dataItems[agentId] || {x: [], y: []};
      dataItems[agentId].x.push(x);
      dataItems[agentId].y.push(y);
    }
    return Object.values(dataItems);
  }

  useEffect(() => {
    const coordinates = generateXYCoordinates();
    setPlotData(coordinates);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <Plot data={ plotData } 
        layout={{ autosize: true }}
        useResizeHandler
        config={{ scrollZoom:true, displaylogo: false }}
        className="plot" />
      </header>
    </div>
  );
}

export default App;

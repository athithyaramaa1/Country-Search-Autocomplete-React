import { useState } from 'react'
import './App.css'
import data from './countryData.json'

function App() {
  const[state, setState] = useState([])
  
  const handleChange = (e) => {
    const inputVal = e.target.value.toLowerCase();
    const filteredData = data.filter(ele => ele.name.toLowerCase().includes(inputVal));
    setState(filteredData);
  }

  const handleKey = (event) => {
    if(event.key == "Escape"){
      console.log("Escape")
      setState([])
    }
  }

  return (
    <div>
      <h1>Search for country down here!</h1>
      <input type="text" onChange={handleChange} onKeyDown={handleKey} style={{height: '30px', borderRadius: '8px',}}/>
      <button>Search</button>
      {state.map((ele, index) => (
        <div key={index}>{ele.name}</div>
      ))}
    </div>
  );
}

export default App;

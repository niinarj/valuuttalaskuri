import { useState } from 'react';
import './App.css';
import axios from 'axios';


const URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_VXMj3SbPx8BSU5Iwy1p0bQ7SOLBmzw0rhkRR8kkd&currencies=GBP&base_currency=EUR"
            
function App() {
const[eur, setEur] = useState(0)
const[gbp, setGbp] = useState(0)
const[rate, setRate] = useState (0)

const convert = (e) => {
  e.preventDefault()
  axios.get(URL)
  .then((response) => {
    const json = response.data
    setRate(json.data.GBP);
    setGbp(eur * json.data.GBP);
  }).catch (error =>{
    alert(error)
  })
}


  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>Eur</label>
          <input type="number" step =" 0.01"
          value={eur} onChange={e=>setEur(e.target.value)}/>
          <output>{rate}</output>
        </div>
        <div>
          <label>Gbp</label>
          <output>{gbp.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;

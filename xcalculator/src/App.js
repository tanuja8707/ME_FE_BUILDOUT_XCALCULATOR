import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [input,setInput] = useState("");

  function handleClick(button) {
    if(button === "=") {
      if(input === "") {
        setResult("Error")
      } else
        calculate();
    }  else if(button === "C") {
      reset();
    } else {
      setInput(prevInput => prevInput + button);
    }
  }
  // const onClick = (button) => {
  //   if(button === "=") {
  //     if(input === "") {
  //       setResult("Error")
  //     } else
  //       calculate();
  //   }  else if(button === "C") {
  //     reset();
  //   } else {
  //     setInput(prevInput => prevInput + button);
  //   }
  // };

  const calculate = () => {
    let checkResult = '';
    if(input.includes('--')) {
      checkResult = input.replace('--', '+');
    } else if(input.includes("0/0")) {
      return setResult("NaN");
    } else {
      checkResult = input;
    }

    try {
      setResult((eval(checkResult) || "") + "");
    } catch(e) {
      setResult("Error");
    }
  };

  const reset = () => {
    setResult("");
    setInput("")
  };


  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div>
          <input type="text" value={input} readOnly />
          {result && <div className="result">{result}</div>}
          {/* <div>
          {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 'C', 0, '=', '+'].map((buttonValue, index) => (
          <button key={index} >{buttonValue}</button>
        ))}
          </div> */}
          
          <div className='margin-top'>
            <button name="7" onClick={e=> handleClick(e.target.name)} >7</button>
            <button name="8" onClick={e=> handleClick(e.target.name)} >8</button>
            <button name="9" onClick={e=> handleClick(e.target.name)} >9</button>
            <button name="+" onClick={e=> handleClick(e.target.name)} >+</button>
          </div>
          <div>
            <button name="4" onClick={e=> handleClick(e.target.name)} type="button">4</button>
            <button name="5" onClick={e=> handleClick(e.target.name)} type="button">5</button>
            <button name="6" onClick={e=> handleClick(e.target.name)} type="button">6</button>
            <button name="-" onClick={e=> handleClick(e.target.name)} type="button">-</button>
          </div>
          <div>
            <button name="1" onClick={e=> handleClick(e.target.name)} type="button">1</button>
            <button name="2" onClick={e=> handleClick(e.target.name)} type="button">2</button>
            <button name="3" onClick={e=> handleClick(e.target.name)} type="button">3</button>
            <button name="*" onClick={e=> handleClick(e.target.name)} type="button">*</button>
          </div>
          <div>
            <button name="C" onClick={e=> handleClick(e.target.name)} type="button">C</button>
            <button name="0" onClick={e=> handleClick(e.target.name)} type="button">0</button>
            <button name="=" onClick={e=> handleClick(e.target.name)} type="button">=</button>
            <button name="/" onClick={e=> handleClick(e.target.name)} type="button">/</button>
          </div>
      </div>
    </div>
  );
}

export default App;

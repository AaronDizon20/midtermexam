import React, { useState } from "react";
import "./App.css";

function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [dispValue, setDispValue] = useState("10 Things That Require Zero Talent");

  const items = {
    "1": "Being On Time",
    "2": "Making An Effort",
    "3": "Being High Energy",
    "4": "Having A Positive Attitude",
    "5": "Being Passionate",
    "6": "Using Good Body Language",
    "7": "Being Coachable",
    "8": "Doing A Little Extra",
    "9": "Being Prepared",
    "0": "Having A Strong Work Ethic",
    "NAME": "AARON PAUL D. DIZON",
    "SUBJ": "C-PCIT9"
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (items[value]) {
      setDispValue(items[value]);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">AARON PAUL D. DIZON - BSIT-DA3A</h1>
        <Display value={dispValue} />
        <div className="buttons">
          <Button label="7" onClick={handleButtonClick} />
          <Button label="8" onClick={handleButtonClick} />
          <Button label="9" onClick={handleButtonClick} />

          <Button label="4" onClick={handleButtonClick} />
          <Button label="5" onClick={handleButtonClick} />
          <Button label="6" onClick={handleButtonClick} />

          <Button label="1" onClick={handleButtonClick} />
          <Button label="2" onClick={handleButtonClick} />
          <Button label="3" onClick={handleButtonClick} />

          <Button label="NAME" onClick={handleButtonClick} />
          <Button label="0" onClick={handleButtonClick} />
          <Button label="SUBJ" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}
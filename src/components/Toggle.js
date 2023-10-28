import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  const color = isOn ? "white" : "red";
  function handleBotton() {
    setIsOn((isOn)=> isOn = ~isOn)
  }

  return <button style={{ background: color }} onClick={handleBotton}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

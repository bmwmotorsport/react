import { useState } from "react";

export default function U_b() {
  const [text, setText] = useState("Hello!");
  const [color, setColor] = useState("red");
  const [visible, setVisible] = useState(true);

  function changeText() {
    setText(text === "Hello!" ? "Welcome!" : "Hello!");
  }

  function changeColor() {
    setColor(color === "black" ? "blue" : "black");
  }
  
  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div>
      {visible && <h2 style={{ color }}>{text}</h2>}
      <button onClick={changeText}>Change Text</button>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={toggleVisibility}>Hide/Show</button>
    </div>
  );
}

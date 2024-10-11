import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("#282828");

  function randomColorGenerator() {
    let randomColor = "#";
    const possibleValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * possibleValues.length);
      // console.log(randomNumber);
      randomColor += possibleValues[randomNumber];
    }
    console.log(randomColor);
    return randomColor;
  }

  return (
    <div
      style={{ background: bgColor }}
      className="flex items-center justify-center h-screen p-5 duration-500"
    >
      <div className="bg-gray-300 p-4 flex flex-col justify-center items-center gap-3">
        <h1>Current color: {bgColor}</h1>
        <button
          onClick={() => setBgColor(randomColorGenerator)}
          className="bg-green-500 rounded-sm p-2 border-black"
        >
          Click me!!
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function ManejadorAtributos() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [padding, setPading] = useState(20);
  const [margin, setMargin] = useState(20);
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderRadius, setBorderRadius] = useState(20);
  const [boxSizing, setBoxSizing] = useState();

  const handleBoxsizing = (e) => {
    setBoxSizing(e.target.value);
    console.log(boxSizing);
  };

  return (
    <div>
      <div>
        <label>Width</label>
        <input
          type="range"
          value={width}
          name="width"
          onChange={(e) => setWidth(e.target.value)}
          min="0"
          max="1000"
        />
      </div>
      <div>
        <label>Height</label>
        <input
          type="range"
          value={height}
          name="height"
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          max="1000"
        />
      </div>
      <div>
        <label>Padding</label>
        <input
          type="range"
          value={padding}
          name="padding"
          onChange={(e) => setPading(e.target.value)}
          min="0"
          max="1000"
        />
      </div>
      <div>
        <label>Margin</label>
        <input
          type="range"
          value={margin}
          name="margin"
          onChange={(e) => setMargin(e.target.value)}
          min="0"
          max="1000"
        />
      </div>
      <div>
        <label>Border width </label>
        <input
          type="range"
          value={borderWidth}
          name="borderWidth"
          onChange={(e) => setBorderWidth(e.target.value)}
          min="0"
          max="100"
        />
      </div>

     <div>
     <label>Border radius</label>
      <input
        type="range"
        value={borderRadius}
        name="borderRadius"
        onChange={(e) => setBorderRadius(e.target.value)}
        min="0"
        max="100"
      />
     </div>
      <label>Box sizing</label>
      <select style={{ marginLeft: "20px" }} onClick={handleBoxsizing}>
        <option value="content-box">Content box</option>
        <option value="border-box">Border box</option>
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: `${width}px`,
          height: `${height}px`,
          padding: `${padding}px`,
          margin: `${margin}px`,
          background: "green",
          border: `${borderWidth}px solid black`,
          borderRadius: `${borderRadius}%`,
          boxSizing: `${boxSizing}`,
        }}
      >
        Content
      </div>
    </div>
  );
}

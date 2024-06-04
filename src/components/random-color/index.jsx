import React, { useState, useEffect } from 'react';

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    if (typeOfColor === 'rgb') generateRgbColor();
    else generateHexColor();
  }, [typeOfColor]);

  const getRandomNumber = (n) => {
    return Math.floor(Math.random() * n);
  };
  const generateHexColor = () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += values[getRandomNumber(values.length)];
    }
    setColor(hex);
  };

  const generateRgbColor = () => {
    const r = getRandomNumber(256);
    const g = getRandomNumber(256);
    const b = getRandomNumber(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      className="container"
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={typeOfColor === 'hex' ? generateHexColor : generateRgbColor}
      >
        Generate New Color
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '30px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RBG color' : 'Hex color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

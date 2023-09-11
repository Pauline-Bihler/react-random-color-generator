// Import libraries needed
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#ffb6c1'); // Initial color
  return (
    <>
      <br />
      <br />
      <h1
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f8ff',
          width: '360px',
          height: '40px',
          margin: '0 auto',
          whiteSpace: 'nowrap',
        }}
      >
        Random Color Generator
      </h1>
      <br />
      <p
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e6e6fa',
          width: '320px',
          height: '20px',
          margin: '0 auto',
          whiteSpace: 'nowrap',
        }}
      >
        Generate a random color with a click of a button!
      </p>
      <br />
      <br />
      <div
        style={{
          backgroundColor: color,
          width: '300px',
          height: '300px',
          margin: '0 auto',
          textAlign: 'center',
          lineHeight: '280px',
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <br />
      <button
        style={{
          display: 'block',
          margin: '0 auto',
          width: '160px',
          height: '40px',
          textAlign: 'center',
          lineHeight: '40px',
          backgroundColor: '#f0f8ff',
        }}
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </>
  );
}

import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {
  const [input, setInput] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleGenerate = () => {
    setQrCode(input);
    setInput('');
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          placeholder="enter some text"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  );
}

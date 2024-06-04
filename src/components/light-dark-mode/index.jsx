import React from 'react';

import useLocalStorage from './useLocalStorage';
import './theme.css';

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>hello world</p>
        <button onClick={handleChange}>Change Theme</button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue = 'dark';
    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (e) {
      console.log(e);
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

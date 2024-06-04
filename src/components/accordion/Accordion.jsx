import React, { useState } from 'react';
import data from './data';
import './styles.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (itemId) => {
    if (itemId === selected) {
      setSelected(!selected);
      return;
    }
    setSelected(itemId);
  };

  const handleMultiSelecton = (itemId) => {
    const cpyMultiple = [...multiple];
    const indexOfCurrentId = cpyMultiple.indexOf(itemId);
    if (indexOfCurrentId === -1) {
      cpyMultiple.push(itemId);
    } else {
      cpyMultiple.splice(indexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Seletion
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              onClick={() =>
                enableMultiSelection
                  ? handleMultiSelecton(item.id)
                  : handleSingleSelection(item.id)
              }
              className="item"
            >
              <div className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {!enableMultiSelection && selected === item.id && (
                <div className="answer">{item.answer}</div>
              )}
              {enableMultiSelection && multiple.indexOf(item.id) !== -1 && (
                <div className="answer">{item.answer}</div>
              )}
              {/* {(selected === item.id || multiple.indexOf(item.id) !== -1) && (
                <div className="answer">{item.answer}</div>
              )} */}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
}

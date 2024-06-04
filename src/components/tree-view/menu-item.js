import React, { useState } from 'react';

import MenuList from './menu-list';

export default function MenuItem({ item = {} }) {
  const [childrenToggle, setChildrenToggle] = useState({});

  const handleToggle = (label) => {
    setChildrenToggle({
      ...childrenToggle,
      [label]: !childrenToggle[label],
    });
  };
  return (
    <li>
      <div className="menu-item">
        <div>{item.label}</div>
        <div onClick={() => handleToggle(item.label)}>
          {childrenToggle[item.label] ? '-' : '+'}
        </div>
      </div>
      {item.children &&
        item.children.length > 0 &&
        childrenToggle[item.label] && <MenuList list={item.children} />}
    </li>
  );
}

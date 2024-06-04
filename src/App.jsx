import React from 'react';
import './App.css';

import Accordion from './components/accordion/Accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import menus from './components/tree-view/data';
import TreeView from './components/tree-view';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';

export default function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} />*/}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={} limit={4} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      <LightDarkMode />
    </div>
  );
}

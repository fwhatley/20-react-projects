import React, { useState, useEffect } from 'react';

import './styles';

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  let fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const dataRes = await res.json();
      setImages(dataRes);
    } catch (e) {
      setErrorMsg(e.message || 'error fetching images');
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    console.log('before', { currentSlide });
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    console.log('after', { currentSlide });
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  if (errorMsg) return <div>{errorMsg}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <div className="container">
      <button className="arrow arrow-left" onClick={handlePrev}>
        Go Left
      </button>
      <div>
        {images &&
          images.length > 0 &&
          images.map((item, index) => {
            return (
              <img
                key={item.id}
                alt={item.download_url}
                src={item.download_url}
                className={
                  currentSlide === index
                    ? 'current-image'
                    : 'current-image hide-current-image'
                }
              />
            );
          })}
      </div>
      <button className="arrow arrow-right" onClick={handleNext}>
        Go Right
      </button>

      <span className="circle-indicators">
        {images &&
          images.length &&
          images.map((item, i) => {
            return (
              <button
                key={i}
                className={
                  currentSlide === i
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
                onClick={() => setCurrentSlide(i)}
              ></button>
            );
          })}
      </span>
    </div>
  );
}

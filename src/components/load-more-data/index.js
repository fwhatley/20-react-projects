import React, { useState, useEffect } from 'react';
import './styles';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = `https://dummyjson.com/products?limit=20&skip=${count * 20}`;
      const res = await fetch(url).then((res) => res.json());
      setProducts([...products, ...res.products]);
      console.log(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) return <div>loading...</div>;

  const disableLoadMore = count * 20 >= 100;
  return (
    <div className="container">
      <div className="products">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div className="product">
                <img
                  src={product?.thumbnail}
                  alt="product image"
                  width="30px"
                />
                <div>{product.title}</div>
              </div>
            );
          })}
      </div>
      <div className="load-more">
        <button disabled={disableLoadMore} onClick={() => setCount(count + 1)}>
          Load More
        </button>

        {disableLoadMore && <p>You loaded all 100 items</p>}
      </div>
    </div>
  );
}

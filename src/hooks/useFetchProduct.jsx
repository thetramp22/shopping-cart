import { useEffect, useState } from 'react';

const useFetchProduct = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
      });
  }, []);
  return productData;
};
export default useFetchProduct;

// import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import useFetchProduct from '../hooks/useFetchProduct';

const Shop = () => {
  // const [productData, setProductData] = useState(null);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?limit=3')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProductData(json);
  //     });
  // }, []);

  const productData = useFetchProduct();

  return (
    <>
      <h2>shop page</h2>
      <div className="product-grid">
        {productData ? (
          productData.map((product) => {
            const { id, title, price, description, image } = product;
            return (
              <ProductCard
                key={id}
                title={title}
                price={price}
                description={description}
                image={image}
              />
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};
export default Shop;

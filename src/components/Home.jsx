import { useDispatch } from "react-redux";
import React from "react";

import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
export const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart  = (product) => {
dispatch(addToCart(product))
  }
  return (
    <div className="home-container">
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>an error occured </p>
      ) : (
        <>
          <h2>new arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name}/>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

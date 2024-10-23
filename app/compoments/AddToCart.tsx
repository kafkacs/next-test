"use client";
import React from "react";

const AddToCart = () => {
  const date = new Date();
  return (
    <div>
      <button
        onClick={() => {
          console.log(date);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
export default AddToCart;

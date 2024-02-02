import React, { useState } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { IoMdCloseCircle } from "react-icons/io";

export default function ProductDetail() {
  const { isProductDetailOpen, closeModal, productToShow } =
    useContext(ShoppingCartContext);

  return (
    <div>
      {isProductDetailOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md max-w-2xl flex flex-col md:flex-row relative">
            <button onClick={closeModal}>
              <IoMdCloseCircle className="absolute top-2 right-2 text-2xl cursor-pointer text-red-500 hover:text-red-700 transform hover:scale-110" />
            </button>
            <div className="md:w-1/2 pr-4 flex items-center justify-center">
              {productToShow.image && (
                <img
                  src={productToShow.image}
                  alt={productToShow.title}
                  className="w-full h-auto rounded-md mb-4"
                />
              )}
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{productToShow.title}</h2>
              <p className="text-gray-600 mb-2">{productToShow.category}</p>
              <p className="text-blue-500 text-lg font-bold mb-2">
                ${productToShow.price}
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Descripción:</h3>
                <p className="text-gray-700">{productToShow.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

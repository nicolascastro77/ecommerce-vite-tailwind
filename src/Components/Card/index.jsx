import React from 'react'
import { useContext } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";

import {ShoppingCartContext} from '../../Context'



function Card(data) {

  const { count, setCount, openModal, setProductToShow, setCartProducts, cartProducts, openCheckoutSideMenu} = useContext(ShoppingCartContext)


  const showProduct = (productDetail) => {
    openModal()
    setProductToShow(productDetail)
  }

  const addProductToCart = (productData) => {
    setCount(count + 1); 
    setCartProducts([...cartProducts, productData])
    openCheckoutSideMenu()
    console.log(cartProducts);
  }



  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(product => product.id === id ).length > 0

    if (isInCart) {
      return (
        <div>
          <button  onClick={(e) => {
                      e.stopPropagation(); 
                    }}>
              <BsFillCartCheckFill className="absolute top-0 right-0 flex justify-center items-center w-7 h-7 m-0 text-green-500" />
          </button>
        </div>
      )
    }
    else {
      return (
        <div>
          <button  onClick={(e) => {
                      e.stopPropagation(); 
                      addProductToCart(data.data);
                    }}>
              <IoIosAddCircle className="absolute top-0 right-0 flex justify-center items-center w-7 h-7 m-0 text-gray-200 transition-colors hover:text-gray-500" />
          </button>
        </div>
      )
    }

  }

    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:rotate-2 "
        onClick={()=>{
          showProduct(data.data)
        }}>
          <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
              {data.data.category}
            </span>
            <img className="w-full h-full object-contain rounded-lg" src={data.data.image} alt="Headphones" />
          {renderIcon(data.data.id)}
          </figure>
          <p className="flex justify-between">
            <span className="text-sm font-light line-clamp-2">
            {data.data.title}
            </span>
            <span className="text-lg font-medium">
            ${data.data.price}
            </span>
          </p>
        </div>
      )
}

export default Card
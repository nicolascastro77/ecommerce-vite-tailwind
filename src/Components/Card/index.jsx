import React from 'react'
import { useContext } from 'react';
import { IoIosAddCircle } from "react-icons/io";

import {ShoppingCartContext} from '../../Context'



function Card(data) {

  const { count, setCount, openModal, setProductToShow } = useContext(ShoppingCartContext)


  const showProduct = (productDetail) => {
    openModal()
    setProductToShow(productDetail)
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
            <button  onClick={(e) => {
                        e.stopPropagation(); 
                        setCount(count + 1); 
                      }}>
                <IoIosAddCircle className="absolute top-0 right-0 flex justify-center items-center w-9 h-9 m-0 text-yellow-200 transition-colors hover:text-yellow-500" />
            </button>
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
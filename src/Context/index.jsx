import { createContext, useState } from "react";
import React from 'react'


export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {

    // Shopping cart
    const [count, setCount] = useState(0)

    // Modal Open
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openModal = () => {
        setIsProductDetailOpen(true);
    };

    const closeModal = () => {
        setIsProductDetailOpen(false);
    };
    
    // Product Details
    const [productToShow, setProductToShow] = useState({})


    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            openModal,
            closeModal,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}

import { createContext, useState } from "react";
import React from 'react'


export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({children}) => {

    // Shopping cart
    const [count, setCount] = useState(0)

    // Products in Cart
    const [cartProducts, setCartProducts] = useState([])


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


    // Aside Open
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true);
    };

    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false);
    };


    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            openModal,
            closeModal,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            setCartProducts,
            cartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}

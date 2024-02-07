import { createContext, useEffect, useState } from "react";
import React from "react";

export const ShoppingCartContext = createContext();


//LocalStorage

export const IinitializeLocalStorage = () => {
  const accountLocalStorage = localStorage.getItem('account')
  const signOutINLocalStorage = localStorage.getItem('sign-out')

  let parsedAccount;
  let parsedSignOut;

  if (accountLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountLocalStorage)
  }

  if (!signOutINLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutINLocalStorage)
  }

}


export const ShoppingCartProvider = ({ children }) => {

  const [account, setAccount] = useState({})

  const [signOut, setSignOut] = useState(false)

  // Shopping cart
  const [count, setCount] = useState(0);

  // Products in Cart
  const [cartProducts, setCartProducts] = useState([]);

  // Modal Open
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openModal = () => {
    setIsProductDetailOpen(true);
  };

  const closeModal = () => {
    setIsProductDetailOpen(false);
  };

  // Product Details
  const [productToShow, setProductToShow] = useState({});

  // Aside Open
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  //shopiong cart Order

  const [order, setOrder] = useState([]);

  // Get Products

  const [items, setItems] = useState(null);
  const apiUrl = "https://fakestoreapi.com/products";

  //search
  const [filteresItems, setfilteresItems] = useState(null);
  const [searchByTitle, setsearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(
      (item) => item.category.toLowerCase() === searchByCategory.toLowerCase()
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setfilteresItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setfilteresItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setfilteresItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setfilteresItems(filterBy(null, items, searchByTitle, searchByCategory));
    return () => {
      setfilteresItems(null);
    };
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setsearchByTitle,
        filteresItems,
        setfilteresItems,
        setSearchByCategory,
        setSignOut,
        signOut,
        setAccount,
        account
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

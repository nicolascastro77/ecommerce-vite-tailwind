import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setOrder,
    order,
    setsearchByTitle,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setsearchByTitle(null);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex shadow-lg" : "hidden"
      } checkout-side-menu flex-col p-2 overflow-y-scroll fixed right-0  bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <IoMdCloseCircle
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutSideMenu()}
          ></IoMdCloseCircle>
        </div>
      </div>
      <div className="">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="h-16 flex items-center justify-center">
        <p className="flex w-full justify-between mx-2">
          <span className="font-bold"> Total: </span>
          <span> {totalPrice(cartProducts)} $</span>
        </p>
      </div>
      <Link className="flex justify-center" to="/my-orders/last">
        <button
          onClick={() => {
            handleCheckout();
          }}
          className={`group relative ${
            cartProducts.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500"
          } text-white font-bold py-4 px-4 m-4 rounded-md shadow-md transition-transform transform active:scale-95`}
          disabled={cartProducts.length === 0}
        >
          <span className="">
            Checkout
            <span className="inline-block">
              <IoBagCheckOutline className="mr-2 transition-transform transform group-hover:translate-x-4" />
            </span>
          </span>
        </button>
      </Link>

      <div></div>
    </aside>
  );
};

export default CheckoutSideMenu;

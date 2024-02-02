import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdesCards";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <div className="flex flex-col justify-center w-1/3">
      {/* <OrdersCard /> */}
      {order.map((order, index) => (
        <Link className="my-6" key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </div>
  );
}

export default MyOrders;

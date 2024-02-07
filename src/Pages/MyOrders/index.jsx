import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdesCards";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  if (order.length === 0) {
    return (
      <div className="flex flex-col items-center shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-regular my-6">No hay pedidos</h2>
        <img src="https://i.postimg.cc/RZLkTTZ7/casual-life-3d-metallic-shopping-basket-1.png" alt="Empty Orders" className="w-48 h-48" />
      </div>
    );
  }

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

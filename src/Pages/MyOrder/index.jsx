import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const params = useParams();
  const indexOrderPath = Number(params.id);
  const orders = !isNaN(indexOrderPath)
    ? order?.[indexOrderPath].products
    : order?.slice(-1)[0].products;

  return (
    <div className="">
      <div className="flex items-center relative justify-center my-10">
        <Link to="/my-orders" className="absolute left-0">
          <MdOutlineArrowBackIos />
        </Link>
        <div>
          <span className="">MyOrder</span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-1/3">
          {orders.map((product, index) => (
            <OrderCard
              id={!isNaN(indexOrderPath) ? product.id : index}
              key={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrder;

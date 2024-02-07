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
      <div></div>
      <div className="flex items-center relative justify-center my-10">
        <Link to="/my-orders/" className="absolute left-0">
          <MdOutlineArrowBackIos />
        </Link>
        <div className="">
          <span className="text-3xl font-regula">MyOrder</span>
        </div>
      </div>
      <div className="flex justify-evenly items-center ">
      <div>
      <img className=" w-60" src="https://i.postimg.cc/fbpQ3Rbp/casual-life-3d-shopping-cart-with-boxes.png" alt="Empty Orders" />
      </div>
      <div className="flex flex-col w-1/2 max-h-96  overflow-y-auto">
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

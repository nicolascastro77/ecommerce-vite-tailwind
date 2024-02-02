import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsCartCheck, BsCalendar2Date } from "react-icons/bs";
import { IoIosPricetag } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

export default function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;
  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date;
  };
  return (
    <div className="bg-white shadow-lg p-6 rounded-md transition-transform hover:translate-x-[1rem] ">
      <div className="grid grid-cols-3 gap-4 relative">
        <div className="flex flex-col items-center">
          <BsCartCheck className="h-6 w-6 mb-2" />
          <p>
            {" "}
            Cantidad:{" "}
            <span className=" text-lg font-bold">{totalProducts}</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BsCalendar2Date className="h-6 w-6 mb-2" />
          <p>
            {" "}
            Fecha: <span className=" text-lg font-bold">
              {currentDate()}
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IoIosPricetag className="h-6 w-6 mb-2" />
          <p>
            {" "}
            Total: <span className=" text-lg font-bold">{totalPrice}</span>{" "}
          </p>
        </div>
        <div className=" absolute right-0 items-center self-center">
          <MdNavigateNext className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

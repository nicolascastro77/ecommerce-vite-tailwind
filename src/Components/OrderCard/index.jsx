import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

export default function OrderCard(props) {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXIcon;
  if (handleDelete) {
    renderXIcon = (
      <div className="flex justify-center place-items-center">
        <AiTwotoneDelete
          onClick={() => {
            handleDelete(id);
          }}
          className="cursor-pointer transition duration-300 transform hover:scale-110"
        />
      </div>
    );
  }
  return (
    <div className="flex p-4  border-gray-300 shadow-md mb-5 ">
      {/* Imagen a la izquierda */}
      <div className="flex w-1/4 pr-4 justify-center ">
        <img
          src={imageUrl}
          alt={title}
          className=" object-contain rounded-md"
        />
      </div>

      {/* Título y precio a la derecha */}
      <div className="w-3/4">
        <h2 className="text-xl font-medium mb-2 line-clamp-1">{title}</h2>
        <div className="mt-2 text-lg font-bold text-green-500">{price}</div>
      </div>
      {renderXIcon}
    </div>
  );
}

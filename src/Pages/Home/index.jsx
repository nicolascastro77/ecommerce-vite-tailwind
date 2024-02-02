import React, { useContext, useEffect } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { CiSearch } from "react-icons/ci";
import { FaRegSadCry } from "react-icons/fa";

function Home() {
  const { items, setsearchByTitle, searchByTitle, filteresItems } =
    useContext(ShoppingCartContext);

  const renderView = () => {
    // const itemsToRender = filteresItems?.length > 0
    //   ? filteresItems
    //   : items;

    if (filteresItems?.length > 0) {
      return (
        <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg mb-10">
          {filteresItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="">
          <p className="text-xl mb-4">No existen productos que coincidan</p>
          <FaRegSadCry className=" h-full w-full text-gray-600 my-10" />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="relative mx-auto max-w-md">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          onChange={(event) => setsearchByTitle(event.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <CiSearch className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300" />
        </div>
      </div>
      <div className="mb-10">
        {renderView()}
        <ProductDetail> </ProductDetail>
      </div>
    </div>
  );
}

export default Home;

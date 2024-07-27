import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCT CONTAINER  */}
      <div className="flex-1 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM CONTAINER  */}
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/temporary/p1.png"
            alt=""
            width={100}
            height={100}
          ></Image>
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">Price</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="flex- p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Sous-total</span>
          <span>81</span>
        </div>
        <div className="flex justify-between">
          <span>Services</span>
          <span>0</span>
        </div>
        <div className="flex justify-between">
          <span>Coût de livraison</span>
          <span>2</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL(TVA inclue)</span>
          <span className="font-bold">32</span>
        </div>
        <button className="text-white bg-red-500 p-3 rounded-md w-1/2 self-end">
          Vérifier
        </button>
      </div>
    </div>
  );
};

export default CartPage;

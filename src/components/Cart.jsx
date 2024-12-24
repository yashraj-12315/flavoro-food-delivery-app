import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart) || []; // Ensure cartItems defaults to an empty array

  console.log(cartItems, "cartItems");

  // Calculate total items and total amount
  const totalItems = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems && cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your Cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 w-full lg:w-[18vw]">
          <h3 className="font-semibold text-gray-800">Items: {totalItems}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: ₹{totalAmount.toFixed(2)}
          </h3>
          <hr className="w-full lg:w-[18vw] my-2" />
          <button onClick={()=>navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-full mb-5">
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer 
          ${totalItems > 0 && "animate-bounce transition-all delay-500"}`}
      />
    </>
  );
};

export default Cart;

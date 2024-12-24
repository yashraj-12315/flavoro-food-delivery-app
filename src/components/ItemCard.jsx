import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 shadow-md rounded-lg p-4 relative items-center">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id }));
          toast(`${name} Removed!`, {
            icon: '🙌',
          });
        }}
        className="text-gray-600 cursor-pointer absolute right-4 top-4"
      />
      <img src={img} alt="img err" className="w-[50px] h-[50px]" />
      <div className="leading-5 flex-1">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex items-center gap-2">
            <FaMinus
              onClick={() => qty > 1 && dispatch(decrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <FaPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search, "search");
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {FoodData.filter((food) => {
        if (category === "All") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return (
            category === food.category &&
            food.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
        />
      ))}
      {/* {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
          />
        );
      })} */}
    </div>
  );
};

export default FoodItems;

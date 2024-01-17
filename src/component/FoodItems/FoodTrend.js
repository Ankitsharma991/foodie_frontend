import React from "react";
import ReactStars from "react-rating-stars-component";
import { trendyFood } from "../../assets/Dummy-Data";
import Divider from "../../assets/images/divider.png";

const FoodTrend = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full flex-wrap mb-10">
      <img src={Divider} alt="" className="h-[15vh] w-auto" />
      <p className="mt-[-2vh] mb-[3vh] font-bold font-mono text-[2vmax]">
        Top Trending <span className="text-orange-400">Orders</span>
      </p>
      <div className="flex w-full justify-around flex-wrap items-center text-start">
        {trendyFood.map((food) => (
          <div className="max-w-xs mx-auto mb-6 overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src={food.url}
              alt={food.title}
              className="w-full h-48 object-cover"
            />

            <p className="text-lg font-semibold text-center mt-4">
              {food.title}
            </p>
            <div className="px-4 py-4">
              <p className="text-gray-600 flex justify-between items-center">
                <p className="mt-2 text-green-600 font-bold">₹{food.price}</p>
                <ReactStars
                  value={food.rating}
                  count={5}
                  isHalf={true}
                  activeColor="tomato"
                  edit={false}
                  size={25}
                />
              </p>
              <p className="text-gray-800">{food.ingredients}</p>

              <button className="mt-2 w-full px-4 py-2  border-2 border-red-500 text-red-500  rounded-full hover:bg-red-500 hover:text-white hover:outline-white">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTrend;

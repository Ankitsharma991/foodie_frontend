import React from "react";
import { Food_Shop } from "../../assets/Dummy-Data";
import Divider from "../../assets/images/divider.png";

const FoodShop = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-[-5vh]">
      <img src={Divider} alt="" className="h-[15vh] w-auto" />
      <p className="mt-[-2vh] mb-[3vh] font-bold font-mono text-[2vmax]">
        Check Our <span className="text-orange-400">Home</span>
      </p>
      <div className="flex justify-center gap-[5vw] flex-wrap w-full mb-10 ">
        {Food_Shop.map((food) => (
          <div
            className="text-center shadow-lg py-3 px-5 hover:transform hover:translate-y-[-20px] duration-300 ease-in border-x-gray-300 border-l-[1px] border-t-[1px] hover:cursor-pointer "
            key={food.id}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
              <img
                src={food.url}
                alt={food.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-sm font-medium mb-5">{food.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodShop;

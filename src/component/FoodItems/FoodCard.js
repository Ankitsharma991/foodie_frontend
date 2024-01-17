import React from "react";
import { CardItems } from "../../assets/Dummy-Data";
import { useMediaQuery } from "usehooks-ts";

const FoodCard = () => {
  const mobileView = useMediaQuery("(max-width: 767px)");

  return (
    <div className="flex flex-wrap flex-1 justify-center min-w-[50vw]">
      {CardItems.map((item) => (
        <div
          key={item.id}
          className="max-w-md mx-4 mb-6 overflow-hidden bg-white rounded-lg shadow-lg hover:cursor-pointer hover:opacity-90 border-b-2 border-gray-500 hover:translate-y-[10px] duration-200 ease-out"
        >
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4 text-center">
            <p className="text-lg font-semibold">{item.title}</p>

            {!mobileView ? (
              <>
                <p className="mt-4 text-gray-800 text-start font-medium">
                  Ingredients:
                </p>
                <ul className="list-disc pl-6 text-gray-600 text-start">
                  {item.items.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-blue-500">see more..</p>
            )}
          </div>
          <button className="mt-2 w-full px-4 py-2 font-medium  border-2 border-red-500 text-red-500  rounded-full hover:bg-red-500 hover:text-white hover:outline-white">
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;

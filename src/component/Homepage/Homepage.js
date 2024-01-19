import React from "react";
import item1 from "../../assets/images/item1.png";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.png";
import FoodShop from "../FoodItems/FoodShop";
import FoodTrend from "../FoodItems/FoodTrend";
import FoodCard from "../FoodItems/FoodCard";
import Typewriter from "typewriter-effect";


const Homepage = () => {
  return (
    <>
      <div className="flex flex-col md:mt-70vh mt-[5vh]">
        <div className="flex items-center mt-[3rem] justify-between md:min-h-auto min-h-[70vh]">
          <div className="flex items-baseline w-fit md:m-0 mt-[-95vh]">
            <img
              src={item1}
              alt="plate-1"
              className="lg:h-auto lg:w-auto h-[120px] md:max-w-[20vw]  lg:m-auto md:mt-[40vh] lg:scale-[0.6] lg:mt-[30vh] mt-[40vh]"
            />
          </div>

          <div className="md:mt-[-20vh] h-full w-full  flex flex-col justify-between z-100 flex-1  text-center">
            <div className="p-5">
              <p className="text-[2vmax] font-black ">Taste the Goodness</p>
              <p className="text-[2vmax] font-thin mt-3">FOODIE-HOME</p>
              <p className="md:text-[1.5vmax] text-[2vmax] font-light text-red-500 w-full ">
                <Typewriter
                  options={{
                    strings: [
                      "South Indian Food",
                      "Nepali Non-Veg Thali",
                      "North Indian Veg Thali",
                      "Tea & Snacks",
                      "and Fast Foods.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <div className="flex w-ull justify-between items-center text-center">
              <FoodCard />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between h-fit md:m-0 mt-[-80vh]">
            <div className="flex  flex-col items-center justify-between lg:gap-[10vh] gap-[25vh] md:mt-0 mt-[-40vh]">
              <img
                src={item2}
                alt="plate2"
                className="lg:h-auto lg:scale-[0.6] lg:w-auto h-[120px] w-auto mb-4"
              />
              <img
                src={item3}
                alt="plate3"
                className="lg:h-auto lg:scale-[0.6] lg:w-auto h-[120px] w-auto"
              />
            </div>
          </div>
        </div>
        <FoodShop />
        <FoodTrend />
      </div>
    </>
  );
};

export default Homepage;

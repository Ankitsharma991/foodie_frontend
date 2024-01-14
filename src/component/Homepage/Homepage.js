import React from "react";
import item1 from "../../assets/images/item1.png";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.png";

const Homepage = () => {
  return (
    <div className="flex items-center mt-[3rem] justify-between md:min-h-auto min-h-[70vh]">
      <div className="flex items-baseline w-fit">
        <img
          src={item1}
          alt="plate-1"
          className="lg:h-auto lg:w-auto h-[120px] w-auto lg:m-auto md:mt-[40vh] lg:scale-[0.6] lg:mt-[30vh] mt-[40vh]"
        />
      </div>

      <div className="p-4 lg:mt-[-75vh] mt-[-30vh] h-full w-full  flex flex-col justify-between z-100 flex-1  text-center">
        <div>
          <p>Description</p>
        </div>
        <div className="flex justify-between items-center text-center">
          <div>
            <p>Card-1</p>
          </div>
          <div>
            <p>Card-2</p>
          </div>
          <div>
            <p>Card-3</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex w-fit flex-col items-center justify-between lg:gap-[10vh] gap-[25vh]">
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
  );
};

export default Homepage;

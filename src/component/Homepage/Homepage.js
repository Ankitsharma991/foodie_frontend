import React from "react";
import item1 from "../../assets/images/item1.png";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.png";

const Homepage = () => {
  return (
    <div>
      <div className="">
        <img src={item1} alt="plate-1" />
        <img src={item2} alt="plate2" />
        <img src={item3} alt="plate3" />
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import UserTabs from "./UserTabs";
import Filter from "./Filter";
import OrderItems from "./OrderItems";

const Catalog = () => {
  return (
    <div className="flex flex-col md:ml-[10vw] md:mr-[10vw] ">
      <div className="">
        <UserTabs />
      </div>
      <div className="flex md:justify-between justify-center md:gap-8 md:mt-5">
        <div className="md:flex hidden">
          <Filter />
        </div>
        <div className="md:flex-1">
          <OrderItems />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

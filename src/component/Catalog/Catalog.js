import React from "react";
import UserTabs from "./UserTabs";
import Filter from "./Filter";
import OrderItems from "./OrderItems";

const Catalog = () => {
  return (
    <div className="flex flex-col md:ml-[10vw] md:mr-[10vw]">
      <div className="">
        <UserTabs />
      </div>
      <div className="flex justify-between  gap-8 mt-5">
        <div>
          <Filter />
        </div>
        <div className="flex-1">
          <OrderItems />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import React, { useState } from "react";
import { all_Items } from "./Options_Data";
import ReactStars from "react-rating-stars-component";

const ITEMS_PER_PAGE = 12;

const OrderItems = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = all_Items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = all_Items.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    if (currentPage !== 1) {
      handlePageChange(1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== totalPages) {
      handlePageChange(totalPages);
    }
  };

  return (
    <div className="w-fit h-fit flex flex-wrap justify-center md:justify-between px-2 py-4">
      {currentItems.map((item) => (
        <div className="flex md:scale-100 flex-col w-64 bg-white rounded-md shadow-md p-4 mb-3">
          <div className="flex justify-end">
            <p className="items-end  text-sm px-4 rounded-full py-1 bg-green-500 font-bold w-fit text-white">
              ₹{item.price}.00
            </p>
          </div>
          <img
            src={item.url}
            alt={item.title}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <div className="flex flex-col items-center">
            <p className=" text-lg font-mono font-bold text-center">
              {item.title}
            </p>
            <div className="mt-[-1vh]">
              <ReactStars
                value={item.rating}
                count={5}
                isHalf={true}
                activeColor="#ff980f"
                edit={false}
                size={25}
              />
            </div>
          </div>
          <p className="text-start text-gray-700 font-serif text-[15px]">
            {item.desc}
          </p>
          <div className="flex flex-col items-center">
            <button className="mt-2 w-fit px-6 font-semibold py-1  border-2 border-red-500 text-red-500  rounded-full hover:bg-red-500 hover:text-white hover:outline-white">
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      <div className="flex items-center md:justify-between justify-center md:gap-0 gap-5 w-full mt-4 px-4 py-2 h-fit border-b-2 border-gray-300 shadow-inner rounded-md md:scale-100 scale-75 ">
        <p className="text-black text-sm w-fit">
          Page: {currentPage}/{totalPages}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className={`py-2 font-black px-6 rounded-full h-fit w-fit border-2 border-red-600 ${
              currentPage === 1
                ? "hover:cursor-not-allowed bg-gray-600 text-white border-2 border-gray-600"
                : "bg-red-600 text-white hover:bg-white hover:text-red-600  "
            }`}
          >
            First
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`py-2 font-black px-6 rounded-full h-fit w-fit border-2 border-red-600 ${
              currentPage === 1
                ? "hover:cursor-not-allowed bg-gray-600 text-white border-2 border-gray-600"
                : "bg-red-600 text-white hover:bg-white hover:text-red-600  "
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`py-2 font-black px-6 rounded-full h-fit w-fit border-2 border-red-600 ${
              currentPage === totalPages
                ? "hover:cursor-not-allowed bg-gray-600 text-white border-2 border-gray-600"
                : "bg-red-600 text-white hover:bg-white hover:text-red-600  "
            }`}
          >
            Next
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className={`py-2 font-black px-6 rounded-full h-fit w-fit border-2 border-red-600 ${
              currentPage === totalPages
                ? "hover:cursor-not-allowed bg-gray-600 text-white border-2 border-gray-600"
                : "bg-red-600 text-white hover:bg-white hover:text-red-600  "
            }`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;

// {all_Items.map((item) => (
//         <div className="flex flex-col w-64 bg-white rounded-md shadow-md p-4 mb-3">
//           <div className="flex justify-end">
//             <p className="items-end  text-sm px-4 rounded-full py-1 bg-green-500 font-bold w-fit text-white">
//               ₹{item.price}.00
//             </p>
//           </div>
//           <img
//             src={item.url}
//             alt={item.title}
//             className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2"
//           />
//           <div className="flex flex-col items-center">
//             <p className=" text-lg font-mono font-bold text-center">
//               {item.title}
//             </p>
//             <div className="mt-[-1vh]">
//               <ReactStars
//                 value={item.rating}
//                 count={5}
//                 isHalf={true}
//                 activeColor="#ff980f"
//                 edit={false}
//                 size={25}
//               />
//             </div>
//           </div>
//           <p className="text-start text-gray-700 font-serif text-[15px]">
//             {item.desc}
//           </p>
//           <div className="flex flex-col items-center">
//             <button className="mt-2 w-fit px-6 font-semibold py-1  border-2 border-red-500 text-red-500  rounded-full hover:bg-red-500 hover:text-white hover:outline-white">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}

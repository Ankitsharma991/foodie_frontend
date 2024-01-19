import React, { useEffect, useState } from "react";
import { allOptions } from "./Options_Data";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./slider.css";

const geoOption = [
  "Chinese",
  "Mexican",
  "Nepali",
  "Indian",
  "Italian",
  "Western",
];

const Filter = () => {
  const [price, setPrice] = useState(0);

  const handleSliderChange = (value) => {
    setPrice(value);
  };

  let max = 100;

  const handlePriceChange = (e) => {
    const inputPrice = e.target.value.replace("₹", "");
    const numericPrice = parseInt(inputPrice, 10);
    setPrice(isNaN(numericPrice) ? 0 : numericPrice);
  };

  useEffect(() => {
    if (price > max) {
      alert("Invalid input");
      setPrice(0);
    }
  }, [price, max]);

  return (
    <div className="flex flex-col w-[15vw] bg-white">
      <div className="flex h-fit border-b-[1px] border-gray-300  justify-between">
        <p className="uppercase text-red-500 ml-4 my-2 font-semibold font-mono hover:cursor-pointer">
          Filter
        </p>
        <p className="uppercase text-green-600 my-2 mr-4  hover:cursor-pointer  font-semibold font-mono">
          Reset All
        </p>
      </div>

      <div className="flex flex-col px-4 py-2 mt-3 gap-2 text-start border-b-[1px] border-gray-300 pb-5">
        {allOptions &&
          allOptions.map((option) => (
            <div
              className="flex justify-between w-full text-start"
              key={option?.id}
            >
              <div className="flex gap-2">
                <input type="checkbox" id={`checkbox-${option?.id}`} />
                <label
                  htmlFor={`checkbox-${option?.id}`}
                  className="capitalize font-thin font-sans "
                >
                  {option?.name}
                </label>
              </div>
              <p className="flex mr-5">{option?.value}</p>
            </div>
          ))}
      </div>
      <div className="flex flex-col px-4 py-2 mt-3 gap-2 text-start border-b-[1px] border-gray-300 pb-5">
        {geoOption.map((opt, index) => (
          <div className="flex justify-between w-full text-start" key={index}>
            <div className="flex gap-2">
              <input type="checkbox" id={index} />
              <label
                htmlFor={index}
                className="capitalize font-thin font-sans "
              >
                {opt && opt}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="uppercase font-mono font-semibold text-red-500">
          Price Range
        </p>
        <div className="flex flex-col py-2">
          <div className="flex mx-2 justify-around">
            <input
              type="text"
              value={`₹${price}`}
              onChange={handlePriceChange}
              className="max-w-[4vw] border-[1px] border-gray-500 px-1 outline-none font-mono font-bold"
            />
            <p className="font-semibold font-mono text-red-600">to</p>
            <input
              type="text"
              value={`₹100`}
              className="max-w-[4vw] border-[1px] border-gray-500 px-1 outline-none font-mono font-bold"
            />
          </div>
        </div>
        <Slider
          min={1}
          max={max}
          step={1}
          value={price}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default Filter;

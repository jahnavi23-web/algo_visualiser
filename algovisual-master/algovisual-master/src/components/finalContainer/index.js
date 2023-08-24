import React, { useEffect, useRef, useState } from "react";
import Container from "../container";
import { FiRefreshCcw } from "react-icons/fi";
import { BsFillPlayFill, BsStopFill } from "react-icons/bs";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { colors } from "../../themes/colors";
const ActionCard = ({
  children,
  title,
  setArraySize,
  start,
  setSpeed,
  refresh,
  searchTerm,
  steps,
  setPause,
  sortArray,
  sortDisable
}) => {
  const [size, setSize] = useState(12);
  const [speed, setTime] = useState(800);
  const [isStarted,setStarted] = useState(false);
  const [isChecked,setChecked] = useState(false)

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleSpeed = (e) => {
    setTime(e.target.value);
  };

  const handleTouchSpeed = (e) => {
    setSpeed(e.target.value)
  }

  const handleTouchEnd = (e) => {
    console.log(e.target.value)
    setArraySize(e.target.value);
  };

  const Options = () => {
    return (
      <div className="w-[90%] min-h-[80px] align-middle flex flex-col md:flex-row justify-between mx-auto mt-[10px]">
      <p className="text-primary lg:my-auto my-2 font-bold text-xl">{title}</p>
      <button
        onClick={() => {
          if (isStarted == false) {
            refresh();
          }
        }}
        className="w-[50px] mx-1 h-[50px]  lg:my-auto my-2 bg-secondary rounded-lg justify-center align-middle"
      >
        <FiRefreshCcw size={25} className="text-white m-auto" />
      </button>
      <div className="w-[180px] h-[50px]  lg:my-auto my-2 ">
        <p className="text-text font-sans">Array Size</p>
        <input
          type="range"
          min={6}
          max={ window.innerWidth >= 1024 ? 124 : 60}
          step={4}
          value={size}
          onChange={handleSize}
          onInput={handleTouchEnd}
          onMouseUp={() => {
            if (isStarted == false) {
              setArraySize(size);
            }
          }}
          className="thumb:bg-secondary thumb:w-6 thumb:h-6 thumb:rounded-full"
        />
      </div>
      <div className="w-[180px] h-[50px]  lg:my-auto my-2 ">
        <p className="text-text font-sans">Speed</p>
        <input
          type="range"
          min={500}
          max={1000}
          step={10}
          value={speed}
          onChange={handleSpeed}
          onInput={handleTouchSpeed}
          onMouseUp={() => {
            if (isStarted == false) {
              setSpeed(speed);
            }
          }}
          className="thumb:bg-secondary thumb:w-6 thumb:h-6 thumb:rounded-full"
        />
      </div>
      <div className="w-auto h-[50px]  lg:my-auto my-2 ">
        <p className="text-text font-sans">Array sorted</p>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            sortArray(!isChecked);
            setChecked(!isChecked);
          }}
          disabled={sortDisable}
        />
        <span className="slider"></span>
      </div>
      <div className="flex flex-row justify-center align-middle md:my-auto">
        <button
          className="w-[50px] mx-1 h-[50px] lg:my-auto my-2 bg-secondary rounded-lg justify-center align-middle"
        >
          <BsFillPlayFill
            onClick={async () => {
              if (isStarted == false) {
                setStarted(true);
                await start();
                setStarted(false);
              }
            }}
            size={25}
            className="text-white m-auto"
          />
        </button>
        <button
          className="w-[50px] mx-1 h-[50px]  lg:my-auto my-2 bg-secondary rounded-lg justify-center align-middle"
        >
          <BsStopFill
            onClick={() => {
              setPause();
            }}
            size={25}
            className="text-white m-auto"
          />
        </button>
      </div>
      <div className="flex  lg:my-auto my-2 flex-col lg:text-end justify-center align-middle">
        <p className="text-text text-sm">
          Number of Steps :{" "}
          <span className="text-primary font-bold text-lg">{steps}</span>
        </p>
        <p className="text-text text-sm">
          Searching for :{" "}
          <span className="text-primary font-bold text-lg">{searchTerm}</span>
        </p>
      </div>
    </div>
    
    );
  };

  const PlayGround = () => {
    return (
      <div className="w-[95%] h-[360px] mx-auto mb-[10px] bg-gray-800 rounded-lg">
        {children}
      </div>
    );
  };

  return (
    <Container>
      <div className="w-[100%] h-[100%] flex flex-col">
        <Options />
        <PlayGround></PlayGround>
      </div>
    </Container>
  );
};

export default ActionCard;

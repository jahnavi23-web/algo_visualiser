import React, { useEffect, useRef, useState } from "react";
import Container from "../container";
import { FiRefreshCcw } from "react-icons/fi";
import { MdBoy } from "react-icons/md"
import { IoMdPin } from "react-icons/io"
import { BsFillPlayFill, BsStopFill } from "react-icons/bs";
import { GiBrickWall, GiMaze } from "react-icons/gi"
import { colors } from "../../themes/colors";
const PathCard = ({
    children,
    title,
    setGridSize,
    start,
    setSpeed,
    refresh,
    searchTerm,
    steps,
    setPause,
    setAction,
    createMaze
}) => {
    const [size, setSize] = useState(12);
    const [speed, setTime] = useState(800);
    const [isStarted, setStarted] = useState(false);
    const [currentAction, setCurrentAction] = useState(0)
    
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
        setGridSize(e.target.value);
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
                <button
                    onClick={() => {
                        if (isStarted == false) {
                           createMaze()
                        }
                    }}
                    className="w-[50px] mx-1 h-[50px]  lg:my-auto my-2 bg-secondary rounded-lg justify-center align-middle"
                >
                    <GiMaze size={25} className="text-white m-auto" />
                </button>
                <div className="w-[140px] h-[50px]  lg:my-auto my-2 ">
                    <p className="text-text font-sans">Grid Size</p>
                    <input
                        type="range"
                        min={2}
                        max={window.innerWidth >= 1024 ? 40 : 20}
                        step={1}
                        value={size}
                        onChange={handleSize}
                        onInput={handleTouchEnd}
                        onMouseUp={() => {
                            if (isStarted == false) {
                                setGridSize(size);
                            }
                        }}
                        className="thumb:bg-secondary thumb:w-6 thumb:h-6 thumb:rounded-full"
                    />
                </div>
                <div className="w-[140px] h-[50px]  lg:my-auto my-2 ">
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
                    <button
                        className="w-[50px] mx-1 h-[50px] lg:my-auto my-2  rounded-lg justify-center align-middle"
                        style={{backgroundColor:currentAction == 1 ? colors.secondary : "none"}}
                    >
                        <MdBoy
                            onClick={async () => {
                               setAction(1)
                               setCurrentAction(1)
                            }}
                            size={35}
                            className="text-white m-auto"
                        />
                    </button>
                    <button
                        className="w-[50px] mx-1 h-[50px] lg:my-auto my-2 rounded-lg justify-center align-middle"
                        style={{backgroundColor:currentAction == 2 ? colors.secondary : "none"}}
                    >
                        <IoMdPin
                            onClick={async () => {
                                setAction(2)
                                setCurrentAction(2)
                            }}
                            size={25}
                            className="text-white m-auto"
                        />
                    </button>
                    <button
                        className="w-[50px] mx-1 h-[50px] lg:my-auto my-2 rounded-lg justify-center align-middle"
                        style={{backgroundColor:currentAction == 3 ? colors.secondary : "none"}}
                    >
                        <GiBrickWall
                            onClick={async () => {
                                setAction(3)
                                setCurrentAction(3)
                            }}
                            size={25}
                            className="text-white m-auto"
                        />
                    </button>
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
                        Position :{" "}
                        <span className="text-primary font-bold text-lg">{searchTerm}</span>
                    </p>
                </div>
            </div>

        );
    };

    const PlayGround = () => {
        return (
            <div className="w-[100%] h-[85vh]  mb-[10px] bg-gray-800 ">
                {children}
            </div>
        );
    };

    return (
        <div className=' mt-[50px] my-auto min-h-[470px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between'>
            <div className='w-[95%] align-middle mx-auto  border-solid border-gray-700 border-[1px] rounded-lg min-h-[380px] shadow-xl shadow-gray-700'>
                <div className="w-[98%]  mx-auto align-middle h-[100%] flex flex-col">
                    <Options />
                    <PlayGround></PlayGround>
                </div>
            </div>
        </div>

    );
};

export default PathCard;

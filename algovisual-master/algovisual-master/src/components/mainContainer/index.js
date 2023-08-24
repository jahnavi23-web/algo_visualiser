import { useEffect, useRef, useState } from "react";
import ActionCard from "../finalContainer";
import { colors } from "../../themes/colors";

const MainContainer = ({algo,isSorted,symbol,title}) => {
  const [arraySize, setSize] = useState(12);
  const [array, setArray] = useState([0]);
  const [barWidth, setBarWidth] = useState(0);
  const [barHeight, setBarHeight] = useState(0);
  const [speed, setSpeed] = useState(800);
  const [steps, setSteps] = useState(0);
  const [searchTerm,setSearchTerm] = useState(-1);
  const [arrayColor,setArrayColor] = useState([0]);
  const [sortArray,setSort] = useState(isSorted);
  const stopRef = useRef(false);
  
  useEffect(() => {
    generateRandomArray();
  }, [arraySize]);

  const generateRandomArray = (isSort=sortArray) => {
    const array = [];
    setArrayColor(Array(arraySize).fill(0))
    for (let i = 0; i < arraySize; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      array.push(randomNumber);
    }
    if(isSort){
    setArray(array.sort((a, b) => a - b));
    }else{
      setArray(array)
    }
    var barWidth = Math.min(100 / array.length, 4);
    var barHeight = 90 / Math.max(...array);
    setBarHeight(barHeight);
    setBarWidth(barWidth);
  };

  const Display = () => {
    var w = barWidth;
    var h = barHeight;
    return array.map((i, j) => {
      return (
        <div
          key={j}
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            width: `${w}%`,
            height: `100%`,
            marginInline: 2,
          }}
        >
          <div
            id={symbol + j}
            style={{ height: `${h * i}%`,backgroundColor:arrayColor[j] == 1 ? colors.primary : arrayColor[j] == 2 ? "red" : colors.secondary }}
            className={` w-[100%] h-[100%] rounded-t-md`}
          ></div>
          {arraySize < 30 && window.innerWidth >= 1024  && <p className="text-center text-text">{i}</p>}
        </div>
      );
    });
  };

  const handleSliderChange = (value) => {
    if (value != arraySize) {
      setArrayColor(Array(arraySize).fill(0))
      setSize(value);
    }
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handlePause = ()=> {
    stopRef.current = true;
  }
  
  return (
    <ActionCard
      refresh={() => {
        generateRandomArray();
      }}
      title={title}
      start={()=>{
        stopRef.current = false
        algo(arraySize, array, setArrayColor, setSteps, setSearchTerm, speed, colors, delay,stopRef)
      }}
      setArraySize={handleSliderChange}
      setSpeed={(e) => {
        setSpeed(e);
      }}
      steps={steps}
      searchTerm={searchTerm}
      setPause = {handlePause}
      sortArray={(e)=>{
        setSort(e)
        generateRandomArray(e)
      }}
      sortDisable={isSorted == null ? false : isSorted }
    >
      <div className="w-[100%] h-[100%] flex flex-row justify-center">
        <Display />
      </div>
    </ActionCard>
  );
};

export default MainContainer;

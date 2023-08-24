import React, { useState } from "react";
import BubbleSort from "../../modals/Sorting/bubble";
import SelectionSort from "../../modals/Sorting/selection";
import InsertionSort from "../../modals/Sorting/insertion";
import { colors } from "../../themes/colors";
import MergeSort from "../../modals/Sorting/merge";
import QuickSort from "../../modals/Sorting/quick";

function Sorting() {
  const [type, setType] = useState(0);
  return (
    <div className="max-w-7xl mx-auto min-h-[80vh] ">
      <div className="w-[90%] mx-auto mt-10 mb-10 flex flex-col items-center">
        <div className=" sm:min-w-[300px] px-3 flex flex-wrap justify-center items-center border-gray-700 border-[1px] rounded-lg shadow-lg shadow-gray-700">
          <div
            style={{ backgroundColor: type === 0 ? colors.primary : "" }}
            className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
          >
            <button onClick={() => setType(0)} className="text-text mx-auto">
              Bubble
            </button>
          </div>
          <div
            style={{ backgroundColor: type === 1 ? colors.primary : "" }}
            className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
          >
            <button onClick={() => setType(1)} className="text-text">
              Selection
            </button>
          </div>
          <div
            style={{ backgroundColor: type === 2 ? colors.primary : "" }}
            className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
          >
            <button onClick={() => setType(2)} className="text-text">
              Insertion
            </button>
          </div>
          <div
            style={{ backgroundColor: type === 3 ? colors.primary : "" }}
            className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
          >
            <button onClick={() => setType(3)} className="text-text">
              Merge
            </button>
          </div>
          <div
            style={{ backgroundColor: type === 4 ? colors.primary : "" }}
            className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
          >
            <button onClick={() => setType(4)} className="text-text">
              Quick
            </button>
          </div>
        </div>
      </div>

      {type == 0 && <BubbleSort />}
      {type == 1 && <SelectionSort />}
      {type == 2 && <InsertionSort />}
      {type == 3 && <MergeSort />}
      {type == 4 && <QuickSort />}
      <div className="py-5"></div>
    </div>
  );
}

export default Sorting;

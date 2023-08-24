import React, { useState } from 'react'
import LinearSearch from '../../modals/Searching/linear'
import BinarySearch from '../../modals/Searching/binary'
import { colors } from '../../themes/colors';

function Searching() {
  const [type,setType] = useState(0);
  return (
    <div className='max-w-7xl mx-auto min-h-[80vh] '>
        <div className="w-full mt-10 mb-10 flex flex-col items-center">
  <div className="w-[90%] sm:w-[300px] px-3 flex flex-row justify-between items-center border-gray-700 border-[1px] rounded-lg shadow-lg shadow-gray-700">
    <div
      style={{ backgroundColor: type === 0 ? colors.primary : "" }}
      className="my-2 mx-auto sm:mx-0 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
    >
      <button onClick={() => setType(0)} className="text-text mx-auto">
        Linear
      </button>
    </div>
    <div
      style={{ backgroundColor: type === 1 ? colors.primary : "" }}
      className="my-2 mx-auto sm:mx-0 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
    >
      <button onClick={() => setType(1)} className="text-text">
        Binary
      </button>
    </div>
  </div>
</div>

       {type == 0 && <LinearSearch />}
       {type == 1 && <BinarySearch />}
        <div className='py-5'></div>
    </div>
  )
}

export default Searching
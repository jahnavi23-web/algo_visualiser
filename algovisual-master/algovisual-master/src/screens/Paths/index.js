import React, { useState } from 'react'
import { colors } from "../../themes/colors";
import BFS from '../../modals/Paths/BFS';
import BestFirst from '../../modals/Paths/BestFirstS';
import Astar from '../../modals/Paths/Astar';
import Dijkstra from '../../modals/Paths/Dijkstra';
function Paths() {
    const [type, setType] = useState(0);
    return (
        <div className='w-full mx-auto min-h-[80vh] '>
            <div className="w-[90%] mx-auto mt-10 mb-10 flex flex-col items-center">
                <div className=" sm:min-w-[300px] px-3 flex flex-wrap justify-center items-center border-gray-700 border-[1px] rounded-lg shadow-lg shadow-gray-700">
                    <div
                        style={{ backgroundColor: type === 0 ? colors.primary : "" }}
                        className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
                    >
                        <button onClick={() => setType(0)} className="text-text mx-auto">
                            Breadth First
                        </button>
                    </div>
                    <div
                        style={{ backgroundColor: type === 5 ? colors.primary : "" }}
                        className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
                    >
                        <button onClick={() => setType(5)} className="text-text mx-auto">
                        Greedy Best First
                        </button>
                    </div>
                    <div
                        style={{ backgroundColor: type === 2 ? colors.primary : "" }}
                        className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
                    >
                        <button onClick={() => setType(2)} className="text-text">
                            A*
                        </button>
                    </div>
                    <div
                        style={{ backgroundColor: type === 3 ? colors.primary : "" }}
                        className="my-2 mx-2 sm:mx-3 w-full sm:w-[140px] rounded-lg justify-center items-center flex h-[40px]"
                    >
                        <button onClick={() => setType(3)} className="text-text">
                        Dijkstra
                        </button>
                    </div>
                </div>
            </div>
            {type == 0 && <BFS />}
            {type == 5 && <BestFirst />}
            {type == 2 && <Astar />}
            {type == 3 && <Dijkstra />}
            <div className='py-5'></div>
        </div>
    )
}

export default Paths;
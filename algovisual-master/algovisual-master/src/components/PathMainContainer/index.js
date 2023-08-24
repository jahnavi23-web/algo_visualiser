import { useEffect, useRef, useState } from "react";
import { colors } from "../../themes/colors";
import PathCard from "../PathContainer";
import { MdBoy } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { GiBrickWall } from "react-icons/gi";

const PathMainContainer = ({ algo, isSorted, symbol, title }) => {
    const [gridSize, setGrid] = useState(12);
    const [grid, setMatrix] = useState([[0]]);
    const [speed, setSpeed] = useState(800);
    const [steps, setSteps] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const gridColor = useRef([0]);
    const stopRef = useRef(false);
    const componentRef = useRef(null);
    const [action, currentAction] = useState(0)

    /*
    action : 0 -- empty
    action : 1 -- startpoint
    action : 2 -- endpoint
    action : 3 -- walls
    */

    useEffect(() => {
        generateRandomGrid();
    }, [gridSize]);


    const generateRandomGrid = () => {
        const width = componentRef.current.getBoundingClientRect().width;
        var dim = 0.8 * window.innerHeight / gridSize;
        var row = Math.round(width / dim);
        const grid = Array.from({ length: gridSize }, () => Array(row).fill(0));
        const temp = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0))
        gridColor.current = temp
        setMatrix(grid)
    };

    const Grid = () => {
        var dim = 0.85 * window.innerHeight / gridSize;

        return (
            <div ref={componentRef} className="w-full h-full">
                {grid.map((i, a) => {
                    return (
                        <div key={symbol+`${a}`}  style={{ width: "100%", height: dim, display: "flex", flexDirection: "row" }}>
                            {i.map((j, b) => {
                                return (
                                    <div key={symbol+`${a}`+`${b}`} onClick={() => {
                                        if (j == 0) {
                                            var checkPlayer = grid.some(row => row.includes(1))
                                            var checkEnd = grid.some(row => row.includes(2))
                                            if (action == 3 || (action == 2 && checkEnd == false) || (action == 1 && checkPlayer == false)) {
                                                const updatedGrid = [...grid];
                                                updatedGrid[a][b] = action;
                                                setMatrix(updatedGrid)
                                            } else {
                                                if (action == 2) {
                                                    var h = grid.map(row => row.map(element => (element === 2 ? 0 : element)));
                                                    h[a][b] = action;
                                                    setMatrix(h)
                                                }
                                                if (action == 1) {
                                                    var h = grid.map(row => row.map(element => (element === 1 ? 0 : element)));
                                                    h[a][b] = action;
                                                    setMatrix(h)
                                                }
                                            }
                                        } else {
                                            const updatedGrid = [...grid];
                                            updatedGrid[a][b] = 0;
                                            setMatrix(updatedGrid)
                                        }
                                    }} style={{ width: dim, height: dim, justifyContent: "center", alignItems: "center", display: "flex", backgroundColor: gridColor.current[a][b], borderColor: "GrayText", boxShadow: "1px 2px 9px #0f0f0f", overflow: "hidden", animation: (gridColor.current[a][b] == "orange" || gridColor.current[a][b] == "green") ? "scale-up-center 0.3s ease-out forwards" : "none" }}>
                                        {j == 1 && <img src="mario.ico" style={{ width: 0.95 * dim, height: 0.95 * dim }} />}
                                        {j == 2 && <img src="house.png" style={{ width: 0.95 * dim, height: 0.95 * dim }} />}
                                        {j == 3 && <GiBrickWall
                                            size={dim * 0.95}
                                            className="text-red-500 m-auto"
                                        />}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        );
    };

    const Display = () => {
        return (
            <div className="w-full h-full flex justify-center align-middle">
                <Grid />
            </div>
        );
    };

    const handleSliderChange = (value) => {
        if (value != gridSize) {
            setGrid(value);
        }
    };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const handlePause = () => {
        stopRef.current = true;
    }

    function generateMaze(rows, cols) {
        const maze = Array.from(Array(rows), () => Array(cols).fill(0));
        let i = 0;
        while (i < grid[0].length) {
            const rowI = getRandomIndex(rows);
            for (let row = 0; row < rows; row++) {
                maze[row][i] = 3;
                if (row == rowI) {
                    maze[rowI][i] = 0; 
                }
            }
            // Scale the random number to the desired range (2 to 5)
            const scaledNumber = (Math.random() * rows / 2) + 2;

            // Round the scaled number to the nearest integer
            const roundedNumber = Math.round(scaledNumber);
            i = i + roundedNumber
        }

        return maze;
    }


    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <PathCard
            refresh={() => {
                generateRandomGrid()
            }}
            title={title}
            start={() => {
                var startNode = [];
                var endNode = [];
                for (var i = 0; i < grid.length; i++) {
                    for (var j = 0; j < grid[i].length; j++) {
                        if (grid[i][j] == 1) {
                            startNode[0] = i;
                            startNode[1] = j;
                        }
                        if(grid[i][j] == 2){
                            endNode[0] = i;
                            endNode[1] = j;
                        }
                    }
                }
                if(startNode.length == 2 && endNode.length == 2){
                stopRef.current = false;

                algo(gridSize, grid, setSteps, setSearchTerm, speed, colors, delay, stopRef, gridColor)
                }else{
                    alert("please fix start and end nodes")
                }
            }}
            setGridSize={handleSliderChange}
            setSpeed={(e) => {
                setSpeed(e);
            }}
            steps={steps}
            searchTerm={searchTerm}
            setPause={handlePause}
            sortDisable={isSorted == null ? false : isSorted}
            setAction={e => {
                currentAction(e)
            }}
            createMaze={() => {
                var z = generateMaze(grid.length, grid[0].length)
                const temp = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0))
                gridColor.current = temp
                setMatrix(z)
            }}
        >
            <div className="w-[100%] h-[100%]">
                <Display />
            </div>
        </PathCard>
    );
};

export default PathMainContainer;

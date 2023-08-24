import PathMainContainer from "../../../components/PathMainContainer";

const BFS = () => {
    const symbol = "h";
    const start = async (gridSize, grid,setSteps, setSearchTerm, speed, colors, delay, stopRef,gridColor) => {

        //fetch startNode 
        var startNode = [];
        var endNode = [];
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    startNode[0] = i;
                    startNode[1] = j;
                }
                if (grid[i][j] == 2) {
                    endNode[0] = i;
                    endNode[1] = j;
                }
            }
        }
        setSearchTerm("["+endNode.toString()+"]")
        var step = 0;
        //find path 
        const bfs = async (graph, startNode,delay,gridColor) => {
            const visited = Array.from(Array(graph.length), () => Array(graph[0].length).fill(0));
            const queue = [];
            queue.push(startNode);
            const parentMap = new Map();
            while (queue.length > 0 && !stopRef.current) {

                var currentNode = queue.shift();

                if (visited[currentNode[0]][currentNode[1]] == 0) {

                    const [row, col] = currentNode;
                    if (grid[row][col] == 2) {
                        var path = reconstructPath(parentMap, startNode, currentNode);
                        return path;
                    } 
                    visited[currentNode[0]][currentNode[1]] = 1;
                    const neighbors = getNeighbours(graph, currentNode);
                    for (let neighbor of neighbors) {
                        if (visited[neighbor[0]][neighbor[1]] == 0 && graph[neighbor[0]][neighbor[1]] != 3) {
                            gridColor.current[neighbor[0]][neighbor[1]] = "orange";
                            queue.push(neighbor);
                            parentMap.set(neighbor, currentNode);
                        }
                    }

                    await delay(1000 - speed)
                    for (let neighbor of neighbors) {
                        if (visited[neighbor[0]][neighbor[1]] == 0 && graph[neighbor[0]][neighbor[1]] != 3) {
                            gridColor.current[neighbor[0]][neighbor[1]] = colors.secondary;
                        }
                    }
                    step += 1;
                    setSteps(step)

                } else {
                    console.log("already visited")
                }
            }


            return undefined;
        };
        var path = await bfs(grid, startNode,delay,gridColor);
        if(path !== undefined){
        var i = 1;
        gridColor.current[path[0][0]][path[0][1]] = "green";
        while (i < path.length) {
            console.log(i);
            step += 1;
            await delay(1000 - speed)
            setSteps(step)
            gridColor.current[path[i-1][0]][path[i-1][1]] = colors.primary;
            gridColor.current[path[i][0]][path[i][1]] = "green";
            i++
        }
        gridColor.current[path[i-1][0]][path[i-1][1]] = colors.primary;
        return true;
    }
    }

    function reconstructPath(parentMap, startNode, targetNode) {
        console.log(parentMap)
        const path = [targetNode];
        let currentNode = targetNode;

        while (currentNode !== startNode) {
            currentNode = parentMap.get(currentNode);
            path.unshift(currentNode);
        }

        return path;
    }

    const getNeighbours = (graph, currentNode) => {
        const [row, col] = currentNode;
        const numRows = graph.length
        const numCol = graph[0].length
        const neighbours = []

        if (row - 1 >= 0) neighbours.push([row - 1, col]);
        if (row + 1 < numRows) neighbours.push([row + 1, col]);
        if (col - 1 >= 0) neighbours.push([row, col - 1]);
        if (col + 1 < numCol) neighbours.push([row, col + 1]);

        return neighbours;
    }

    return (
        <PathMainContainer title={"Breadth First Search"} symbol={symbol} algo={start} />
    );
};

export default BFS

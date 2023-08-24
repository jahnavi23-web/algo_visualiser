class PriorityQueue {
    // initializing the queue
    constructor() {
        this.elements = [];
    }

    // enqueing the elements 
    enqueue(element, priority) {
        this.elements.push({ element: element, priority: priority });
        this.elements.sort((a, b) => a.priority - b.priority)
    }

    // dequeue the element 
    dequeue() {
        return this.elements.shift().element;
    }

    //isEmpty 
    isEmpty() {
        if (this.elements.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    length() {
        return this.elements.length
    }

}

function bestFirstSearch(graph, startNode, heuristic) {
    const visited = Array.from(Array(graph.length),()=>Array(graph[0].length).fill(0));
    const queue = new PriorityQueue();
    queue.enqueue(startNode, heuristic[startNode[0]][startNode[1]]);
    var path = {};
    while (queue.length() > 0) {
        var current = queue.dequeue();
        if (graph[current[0]][current[1]] == 2) {
            console.log("found");
            var finalPath = retrievePath(path, startNode,current)
            return finalPath;
        }

        visited[current[0]][current[1]] = 1;

        var neghibours = getNeighbours(current, graph);

        for (var neighbour of neghibours) {
            if (visited[neighbour[0]][neighbour[1]] == 0) {
                queue.enqueue(neighbour, heuristic[neighbour[0]][neighbour[1]]);
                visited[neighbour[0]][neighbour[1]] = 1;
                var neighbourkey = neighbour.toString();
                path[neighbourkey] = current;
            }
        }
    }
}

function retrievePath(parent, start, goal) {
  const path = [goal];
  var current = goal.toString();

  while (current !== start.toString()) {
    const parentVertex = parent[current];
    path.unshift(parentVertex);
    current = parentVertex.toString();
  }

  return path;
}

function getNeighbours(current, graph) {
    var [row, col] = current;
    var neghibours = [];
    if (row > 0) {
        var temp = [row - 1, col];
        neghibours.push(temp);
    }
    if (row < graph.length - 1) {
        var temp = [row + 1, col];
        neghibours.push(temp);
    }
    if (col > 0) {
        var temp = [row, col - 1];
        neghibours.push(temp)
    }
    if (col < graph[0].length - 1) {
        var temp = [row, col + 1];
        neghibours.push(temp);
    }
    return neghibours;
}

var graph = [[0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0]];
var startNode = [0, 0];

const point2 = [3, 4];

const heuristic = graph.map((row, rowIndex) => {
    return row.map((value, colIndex) => {
        if (value === 2) {
            return 0;
        }
        const distance = Math.round(Math.sqrt(
            Math.pow(colIndex - point2[1], 2) + Math.pow(rowIndex - point2[0], 2)
        ));
        return distance;
    });
});

var result = bestFirstSearch(graph, startNode, heuristic);
console.log(result)
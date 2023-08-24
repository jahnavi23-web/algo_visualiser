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

}

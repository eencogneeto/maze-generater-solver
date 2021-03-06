// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
// lower number is higher priority

// User defined class 
// to store element and its priority 
class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    }
} 
  
// PriorityQueue class 
class PriorityQueue {
  
    // An array is used to implement priority 
    constructor() 
    { 
        this.items = []; 
    }
  
    // enqueue function to add element 
    // to the queue as per priority 
    enqueue(element, priority) 
    { 
        // creating object from queue element 
        var qElement = new QElement(element, priority); 
        var contain = false; 
    
        // iterating through the entire 
        // item array to add element at the 
        // correct location of the Queue 
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].priority > qElement.priority) { 
                // Once the correct location is found it is 
                // enqueued 
                this.items.splice(i, 0, qElement); 
                contain = true; 
                break; 
            } 
        } 
    
        // if the element have the highest priority 
        // it is added at the end of the queue 
        if (!contain) { 
            this.items.push(qElement); 
        } 
    }

    // dequeue method to remove 
    // element from the queue 
    dequeue() 
    { 
        // return the dequeued element 
        // and remove it. 
        // if the queue is empty 
        // returns Underflow 
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }

    // front function 
    front() 
    { 
        // returns the highest priority element 
        // in the Priority queue without removing it. 
        if (this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    }

    // rear function 
    rear() 
    { 
        // returns the lowest priorty 
        // element of the queue 
        if (this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[this.items.length - 1]; 
    }

    // isEmpty function 
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    }

    containsElement(celement) {
        // var temp = this.items;
        // return temp.filter(e => (e.element == celement));

        for(var i = 0; i < this.items.length; i++) {
            if (this.items[i].element == celement) {
                return true;
            }
        }
        return false;
    }

    updatePriority(celement, heuristic) {
        // var temp = this.items;
        // return temp.filter(e => (e.element == celement));

        for(var i = 0; i < this.items.length; i++) {
            if (this.items[i].element == celement && this.items[i].priority > heuristic) {
                this.items[i].priority = heuristic;
                return true;
            }
        }
        return false;
    }
} 

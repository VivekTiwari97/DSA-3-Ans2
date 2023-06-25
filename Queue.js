class Queue {
    constructor() {
      this.items = []; // Array to store queue elements
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow"; // If the queue is empty
      }
      return this.items.shift();
    }
  
    // Return the front element of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Empty the queue
    clear() {
      this.items = [];
    }
  }
  
  // Usage example
  const queue = new Queue();
  console.log(queue.isEmpty()); // Output: true
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.peek()); // Output: 10
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.dequeue()); // Output: 20
  
  console.log(queue.size()); // Output: 1
  
  console.log(queue.isEmpty()); // Output: false
  
  queue.clear();
  console.log(queue.isEmpty()); // Output: true
  
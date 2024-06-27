class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    let current = this.head;
    this.head = newNode;
    newNode.next = current;
  }

  size() {
    let counter = 0;
    let current = this.head;

    while (current !== null) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  header() {
    return this.head;
  }

  tail() {
    let current = this.head;
    let size = this.size();
    while (size > 1) {
      current = current.next;
      size--;
    }
    return current;
  }

  at(num) {
    let current = this.head;
    while (num > 0) {
      current = current.next;
      num--;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let size = this.size();
    while (size > 2) {
      current = current.next;
      size--;
    }
    current.next = null;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.data === value) return true;
      else current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      if (current.data === value) return counter;
      else current = current.next;
      counter++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let output = "";

    while (current !== null) {
      output = output + `( ${current.data} ) -> `;
      current = current.next;
    }
    output = output + " null";
    console.log(output);
  }
}

const myLinkedList = new LinkedList();

myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.prepend(50);

myLinkedList.size();
myLinkedList.header();
myLinkedList.tail();
myLinkedList.at(2);
myLinkedList.pop();
myLinkedList.contains(30);
myLinkedList.find(20);
myLinkedList.toString();

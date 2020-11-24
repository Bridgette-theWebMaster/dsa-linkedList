class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(value, item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      let temp = this.head;
      this.head = new _Node(item, temp);
      return;
    }
    let currNode = this.head;
    let next;
    let previousNode;
    while (currNode.value !== value) {
      previousNode = currNode;
    }
    previousNode.next = new _Node(item, currNode);
  }

  insertAfter(value, item) {
    if (!this.head) {
      return null;
    }
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    if (this.head.value === value) {
      let temp = this.head.next;
      this.head.next = new _Node(item, temp);
      return;
    }
    let currNode = this.head;
    let next = "";
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      this.insertLast(item);
      return;
    }
    next = currNode.next;
    currNode.next = new _Node(item, next);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertAt(pos, item) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    } else {
      let currNode = this.head;
      let index = 0;
      while (currNode.next !== null && pos !== index) {
        currNode = currNode.next;
        index++;
      }
      const temp = new _Node(item, currNode.next);
      currNode.next = temp;
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList();
  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  SLL.insertBefore("Boomer", "Athena");
  SLL.insertAfter("Helo", "Hotdog");
  SLL.insertAt(3, "Kat");
  SLL.remove("Tauhida");

  return SLL;
}
const SLL = main();

function display(list) {
  let output = "";
  let currNode = list.head;
  while (currNode !== null) {
    output += currNode.value;
    if (currNode.next !== null) {
      output += " ->";
    }
    currNode = currNode.next;
  }
  return output;
}

function size(list) {
  let index = 0;
  let currNode = list.head;
  while (currNode !== null) {
    currNode = currNode.next;
    index++;
  }
  return index;
}

function isEmpty(list) {
  let currNode = list.head;
  if (!currNode) return true;
  return false;
}

const zapatos = new LinkedList();

function findPrevious(item, list) {
  if (!list.head || list.head === null) {
    return null;
  }
  if (list.head.value === item) {
    return list.head;
  }
  let currNode = list.head;
  let previousNode;
  while (currNode.value !== item) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return previousNode;
}

function findLast(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  if (list.head.next === null) {
    return list.head;
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function reverseList(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  let currNode = list.head;
  let previousNode = null;
  let temp = currNode;
  while (currNode !== null) {
    temp = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = temp;
  }
  list.head = previousNode;
  return display(list);
}

function third(list) {
  let index = 0;
  let bounds = size(list);
  let currNode = list.head;
  let previousNode;
  while (currNode !== null && index !== bounds - 3) {
    currNode = currNode.next;
    index++;
  }
  return currNode;
}

function middle(list) {
  let index = 0;
  let bounds = size(list);
  let currNode = list.head;
  let previousNode;
  while (currNode !== null && index !== Math.floor(bounds / 2)) {
    currNode = currNode.next;
    index++;
  }
  return currNode;
}

const CycleList = new LinkedList();
CycleList.insertLast("A");
CycleList.insertLast("B");
CycleList.insertLast("C");
CycleList.insertLast("D");

function cycles(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  let currNode = list.head;
  let tempNode = null;
  while (currNode !== null && currNode.next !== null) {
    tempNode = currNode.next;
    while (tempNode !== next) {
      if (currNode.value === tempNode.value) return "Has cycle.";
      tempNode = tempNode.next;
    }
    currNode = currNode.next;
  }
  return "No cycle here.";
}

function sort(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  if (list.head.next === null) {
    return list;
  }
  let currNode = list.head;
  let tempNode = null;
  let previousNode = null;
  while (currNode !== null) {
    previousNode = currNode;
    tempNode = currNode.next;
    if (currNode !== null) {
      currNode = currNode.next;
    }
  }
  return display(list);
}

const sorted = new LinkedList();
sorted.insertLast(2);
sorted.insertLast(1);

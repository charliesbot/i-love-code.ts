type Maybe<T> = T | null;

class LinkedListNode<T> {
  value: T;
  next: Maybe<LinkedListNode<T>>;
  constructor(value: T, next: Maybe<LinkedListNode<T>> = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  head = new LinkedListNode<T>(undefined);
  tail = new LinkedListNode<T>(undefined);
  length = 0;

  append(value: T) {
    const node = new LinkedListNode(value);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    this.length++;
    current.next = node;
  }

  prepend(value: T) {
    const node = new LinkedListNode(value);
    node.next = this.head.next;
    this.length++;
    this.head.next = node;
  }

  deleteHead() {
    this.length--;
    const headVal = this.head.next.next.value;
    this.head.next = this.head.next.next;
    return headVal;
  }

  deleteTail() {
    let current = this.head;
    let prev = this.head;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.length--;
    return prev.value;
  }

  toArray() {
    const array: T[] = [];
    let current = this.head.next;
    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

export { LinkedList };

import { LinkedList } from './LinkedList';

class Stack<T> {
  linkedList = new LinkedList<T>();

  push(value: T) {
    this.linkedList.prepend(value);
  }

  pop() {
    const popped = this.linkedList.deleteHead();
    return popped;
  }

  peek() {
    return this.linkedList.head.next?.value;
  }

  clear() {
    this.linkedList = new LinkedList<T>();
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  length() {
    return this.linkedList.length;
  }

  toArray() {
    return this.linkedList.toArray();
  }
}

export { Stack };

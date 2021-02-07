import { LinkedList } from './LinkedList';

class Queue<T> {
  linkedList = new LinkedList<T>();

  enqueue(value: T) {
    this.linkedList.append(value);
  }

  dequeue() {
    const dequeued = this.linkedList.deleteHead();
    return dequeued;
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

  toArray() {
    return this.linkedList.toArray();
  }
}

export { Queue };

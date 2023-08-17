/*
Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it?
*/

function printListRecursive(list){
    if (list == null) return;
    
    console.log(list.value);
    printListRecursive(list.next);
}


function printListIterative(list){
    let head = list;

    while (head != null){
        console.log(head.value);
        head = head.next;
    }
}


// cheking

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printListRecursive(list);

console.log();

printListIterative(list);
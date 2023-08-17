/*
Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion.
*/

function printListIterative(list){
    let temp = list;
    let stack = [];

    while (temp){
        stack.push(temp.value);
        temp = temp.next;
    }

    while (stack.length) console.log(stack.pop());
}


function printListRecursive(list){
    if (list == null) return ;
    
    printListRecursive(list.next);
    
    console.log(list.value);
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
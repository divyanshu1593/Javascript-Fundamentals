/*
There’s an array of messages as in the previous task. The situation is similar.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.

P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.
*/

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// we will use weakMap to store date of the messages

let messageDate = new WeakMap();


// adding dates of messages
messageDate.set(messages[0], '10/8/2023');
messageDate.set(messages[1], '11/8/2023');
messageDate.set(messages[2], '12/8/2023');


// getting the date of the messages
console.log(messageDate.get(messages[0]));
console.log(messageDate.get(messages[1]));
console.log(messageDate.get(messages[2]));
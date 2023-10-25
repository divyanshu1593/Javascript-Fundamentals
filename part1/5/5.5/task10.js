/*
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

// WARNING: this solution is bad O(n^2)... simply traversing the array from reverse and swaping with a random element from its left side will do the same in O(n)

function randomInt(min, max){
    return min + (Math.random() * (max-min));
}

function shuffle(arr){
    let shuffledArr = [];

    while (arr.length){
        shuffledArr.push( arr.splice(randomInt(0, arr.length), 1)[0] );
    }

    shuffledArr.forEach(item => arr.push(item));
}


// cheking

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }
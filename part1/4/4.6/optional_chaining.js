"use strict";

// accessing an nested key through some intermediate key that may not exist will give error
// but some time in practical case, we may like it to not give error
// Example

let user = {
    name: "divyanshu",
    favouriteAnime: {
        name: "Attack on titan",
        season: 4,
    },
};

let otherUser = {
    name: "ramesh",
};

console.log(user.favouriteAnime.name);  // will work normally
//console.log(otherUser.favouriteAnime.name);  // will give error because ptherUser have no key named favouriteAnime so it was undefined and undefined.name will give error


// some of the ways to avoid this error
// using || or ? operator
console.log(otherUser.favouriteAnime ? otherUser.favouriteAnime.name : undefined);

// using &&
console.log(otherUser.favouriteAnime && otherUser.favouriteAnime.name);

// but this methods make us repeat code and look even more ugly when the level nested key is more
// hence optional chaining is there
// it will check if the value on left of ?. is null or undefined, if it is then it will stop and will return undefined and not go further
// otherwise it will just simply go further and give the value of the key
// Example

console.log(otherUser.favouriteAnime?.name);  // undefined becuase value on the left side was undefined
console.log(user.favouriteAnime?.name);  // works normally and give the value of user.favouriteAnime.name because user.favoriteAnime is not null not undefined

//console.log(unknownUser?.favouriteAnime.name);  // error! because unknownUser is not declared!
let unknownUser;
console.log(unknownUser?.favouriteAnime.name);  // undefined beacuse unknownUser is undefined


// ?. is not an operator, it is a syntax construct
// ?. can be user with () and []

// ?. for cheking if the function exists
console.log(user.unknownFunction?.());  // this means that call this function if it exist otherwise do NOTHING (will NOT give undefined)

// ?. can also be used will [] like following
console.log(user.favouriteAnime?.['name']);  // works normally

// we can also use ?. with delete
delete otherUser.favouriteAnime?.name;  // will not give error
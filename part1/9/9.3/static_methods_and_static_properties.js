// static properties are assiged to the constructor function itself as a property

// Example

// class Anime {

//     static isGood = true;

//     static info(){
//         console.log('This is a japanese animation which is better then any other form of entertainment ;)');
//     }

//     static valueOfThis(){
//         console.log(this);
//     }
// }

// Anime.info();

// console.log(Anime.isGood);

// Anime.valueOfThis();

// // NOTE that static methods and properties cannot be called with an object. It can only be called by a class

// // static methods and properties are inherited

// class AttackOnTitan extends Anime {
//     static info(){
//         super.info();
//         console.log('This anime has one of the greatest story ever!');
//     }

//     static func(){
//         return super.isGood;
//     }
// }

// AttackOnTitan.info();
// console.log(AttackOnTitan.func());

// NOTE that with super we can access parent calss's static methods and static properties

// The above code is similar to the following code

function Anime() {

}

Anime.isGood = true;

Anime.info = function (){
    console.log('This is a japanese animation which is better then any other form of entertainment ;)');
}

Anime.valueOfThis = function (){
    console.log(this);
}

Anime.info();

console.log(Anime.isGood);

Anime.valueOfThis();

function AttackOnTitan() {
    
}

Object.setPrototypeOf(AttackOnTitan, Anime);

AttackOnTitan.info = function (){
    console.log('This is a japanese animation which is better then any other form of entertainment ;)');  // this will be done by super.info
    console.log('This anime has one of the greatest story ever!');
}

AttackOnTitan.func = function (){
    return this.isGood;
}

AttackOnTitan.info();
console.log(AttackOnTitan.func());
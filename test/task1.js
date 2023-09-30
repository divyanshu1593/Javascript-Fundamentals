"use strict";

function characterCount(str){
    let countMap = new Map();

    for (let char of str){
        if (char == ' ') continue;
        char = char.toLowerCase();
        if (countMap.has(char)){
            countMap.set(char, countMap.get(char) + 1);
        } else {
            countMap.set(char, 1);
        }
    }

    let countArray = [];
    
    for (let char of countMap){
        let obj = {
            [char[0]]: char[1]
        };
        countArray.push(obj);
    }


    countArray.sort((a, b) => {
        return Object.values(b)[0] - Object.values(a)[0]
    });

    return countArray;
}

console.log(characterCount('Abra ka dabra'));
/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/


function printNumbers(from, to){
    let cnt = from;

    let timeOut = setInterval(() => {
        if (cnt > to){
            clearInterval(timeOut);
            return ;
        }

        console.log(cnt++);
    }, 1000);
}


function printNumbers2(from, to){
    let cnt = from;

    let timeOut = setTimeout(function temp(){
        if (cnt > to){
            clearTimeout(timeOut);
            return ;
        }

        console.log(cnt++);
        timeOut = setTimeout(temp, 1000);
    }, 1000);
}

printNumbers(1, 5);
printNumbers2(1, 5);
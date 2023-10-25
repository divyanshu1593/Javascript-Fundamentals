/*
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
*/

function getWeekDay(date){
    switch (date.getDay()){
        case 0:
            return 'SU';
        case 1:
            return 'MO';
        case 2:
            return 'TU';
        case 3:
            return 'WE';
        case 4:
            return 'TH';
        case 5:
            return 'FR';
        case 6:
            return 'SA'
    }
}

// cheking 

let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getWeekDay(date) );        // should output "TU"
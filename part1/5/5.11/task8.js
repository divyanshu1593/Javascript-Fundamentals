/*
Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
For instance:

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/


function formatDate(date){
    let now = new Date();

    let diff = now - date;

    if (diff < 1000) return "right now";
    if (diff < 1000 * 60) return `${Math.round(diff/1000)} sec ago`;
    if (diff < 1000 * 60 * 60) return `${Math.round(diff/(1000 * 60))} min ago`;
    
    return `${date.getDate()}.${date.getMonth()}.${date.getYear()} ${date.getHours()}:${date.getMinutes()}`;
}


// cheking

console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

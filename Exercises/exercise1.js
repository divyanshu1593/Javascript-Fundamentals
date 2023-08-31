"use strict";

let library = [];

let isbnUsed = new Set();

const MAX_CHECKOUTS = 3;
const DUE_TIME_INTERVAL = 1000 * 60 * 60 * 24;

/**
 * 
 * @param {string} title - title of the book
 * @param {string} author - name of the authur
 * @param {string} isbn - a UNIQUE numer to identify the book
 * @returns {undefined|object} - book object if it is created otherwise returns undefined
 */
function createBook(title = "unknown", author = "unknown", isbn){
    if (isbn === undefined){
        console.log("ISBN not given");
        return ;
    }

    if (!isValidIsbn(isbn)){
        console.log("Invalid ISBN");
        return ;
    }

    if (typeof title != "string" || title == ''){
        console.log("Invalid title");
        return ;
    }

    if (typeof author != "string" || author == ''){
        console.log("Invalid author");
        return ;
    }

    if (isbnUsed.has(isbn)){
        console.log("ISBN alredy taken");
        return ;
    }

    isbnUsed.add(isbn);

    return {
        title,
        author,
        isbn,
        checkedOut: false,
        checkoutCount: 0,
        rating: [0, 0, 0, 0, 0],
    };
}


/**
 * 
 * @param {object} book 
 * @returns {boolean} - true if book is added otherwise false
 */
function addBookToLibrary(book){
    if (!isValidBookObject(book)){
        console.log("book object is not valid");
        return false;
    }

    if (library.includes(book)){
        console.log("book already exists");
        return false;
    }

    if (library.find(libBook => book.isbn == libBook.isbn)){
        console.log("this is a duplicate book, it is not created using createBook() function");
        return false;
    }

    library.push(book);
    return true;
}


/**
 * 
 * @param {string} isbn 
 * @returns {boolean}  - true if book checkedout otherwise false
 */
function checkoutBook(isbn){
    if (!isValidIsbn(isbn)){
        console.log("ISBN is not valid");
        return false;
    }

    let index = library.findIndex(book => book.isbn == isbn);

    if (index == -1){
        console.log("book with this ISBN is not present in library");
        return false;
    }

    if (library[index].checkedOut){
        console.log("book is already checkouted");
        return false;
    }

    if (library[index].checkoutCount == MAX_CHECKOUTS){
        console.log("max checkout limit reached");
        return false;
    }

    library[index].checkedOut = true;
    library[index].checkoutCount += 1;
    library[index].dueDate = new Date(Date.now() + DUE_TIME_INTERVAL);
    return true;
}


/**
 * 
 * @returns {Array} - array of books that are past their due date
 */
function listOverdueBooks(){
    return library.filter(book => book.checkedOut && Date.now() > book.dueDate.getTime());
}


/**
 * 
 * @param {string} isbn 
 * @param {number} rating 
 * @returns {boolean}  - false if not able to rate otherwise true
 */
function rateBook(isbn, rating){
    if (!isValidIsbn(isbn)){
        console.log("invalid ISBN");
        return false;
    }

    if (typeof rating != "number" || Math.trunc(rating) != rating || rating < 1 || rating > 5){
        console.log("invalid rating");
        return false;
    }

    let book = library.find(book => book.isbn == isbn);

    if (!book){
        console.log("book with this isbn does not exist in library");
        return false;
    }

    book.rating[rating - 1] += 1;
    return true;
}


/**
 * 
 * @param {string} isbn 
 * @returns {number|undefined} - undefined if something is invalid otherwise average rating
 */
function getAverageRating(isbn){
    if (!isValidIsbn(isbn)){
        console.log("invalid ISBN");
        return ;
    }

    let book = library.find(book => book.isbn == isbn);

    if (!book){
        console.log("book with this isbn does not exist in library");
        return ;
    }

    let totalNumberOfRatings = 0;
    let totalRatings = 0;

    for (let i = 0; i < 5; i++){
        totalNumberOfRatings += book.rating[i];
        totalRatings += book.rating[i] * (i + 1);
    }

    if (totalNumberOfRatings == 0){
        console.log("this book is not been rated yet");
        return ;
    }

    return totalRatings / totalNumberOfRatings;
}

/**
 * 
 * @param {string} isbn 
 * @returns {boolean}  - false if not able return book otherwise true
 */
function returnBook(isbn){
    if (!isValidIsbn(isbn)){
        console.log("ISBN is not valid");
        return false;
    }

    let index = library.findIndex(book => book.isbn == isbn);

    if (index == -1){
        console.log("book with this ISBN was never added to library");
        return false;
    }

    if (!library[index].checkedOut){
        console.log("book was not checkouted");
        return false;
    }

    library[index].checkedOut = false;
    return true;
}


/**
 * 
 * @param {string} author 
 * @returns {undefined|Array} - return undefined if author name is not valid otherwise returns an array of books written by author
 */
function findBooksByAuthor(author){
    if (typeof author != "string"){
        console.log("Invalid author");
        return ;
    }

    let authorRegEx = new RegExp(author, 'i');

    return library.filter(book => authorRegEx.test(book.author));
}


/**
 * 
 * @param {string} query - contains title and/or author in it
 * @returns {Array|undefined} - undefined if query is not valid otherwise array of books that partially matches query 
 */
function searchBooks(query){
    if (typeof query != "string"){
        console.log("query has to be a string");
        return ;
    }
    return library.filter(book => {
        let authorRegEx = new RegExp(book.author, 'i');
        let titleRegEx = new RegExp(book.title, 'i');

        return authorRegEx.test(query) || titleRegEx.test(query);
    });
}


/**
 * 
 * @param {string} criteria 
 * @returns {boolean}  - true if was able to sort otherwise false
 */
function sortLibrary(criteria){
    if (typeof criteria != "string" || (criteria != "title" && criteria != "author" && criteria != "average rating")){
        console.log("invalid criteria");
        return false;
    }

    if (criteria == "average rating"){
        // higher rated book should come first in the array
        library.sort((book1, book2) => (getAverageRating(book2.isbn) ?? 0) - (getAverageRating(book1.isbn) ?? 0));
        return true;
    }

    library.sort((book1, book2) => book1[criteria].localeCompare(book2[criteria]));
    return true;
}


/**
 *  saves library in local storage
 */
function saveLibrary(){
    localStorage.setItem('library', JSON.stringify(library));
}


/**
 *  load library from the local storage
 */
function loadLibrary(){
    if (!localStorage.getItem('library')){
        console.log("library was not saved");
        return ;
    }

    library = JSON.parse(localStorage.getItem('library'));
}

/**
 * 
 * @param {string} isbn 
 * @returns {boolean} - false if isbn is not valid otherwise true
 */
function isValidIsbn(isbn){
    if (typeof isbn != "string") return false;

    isbn = isbn.split('-');

    if (isbn.length != 5) return false;

    for (let part of isbn){
        if (part.trim() === '' || isNaN(part)){
            return false;
        }
    }

    return true;
}


/**
 * 
 * @param {object} book 
 * @returns {boolean}  - true if it is valid book object ohterwise false
 */
function isValidBookObject(book){
    if (typeof book != 'object') return false;
    if (book.title === undefined) return false;
    if (book.author === undefined) return false;
    if (book.isbn === undefined) return false;
    if (book.checkedOut === undefined) return false;
    if (book.checkoutCount === undefined) return false;
    if (book.rating === undefined) return false;
    
    return true;
}
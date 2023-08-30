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

    if (typeof title != "string"){
        console.log("Invalid title");
        return ;
    }

    if (typeof author != "string"){
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
 */
function addBookToLibrary(book){
    if (library.includes(book)){
        console.log("book already exists");
        return ;
    }

    if (library.find(libBook => book.isbn == libBook.isbn)){
        console.log("this is a duplicate book, it is not created using createBook() function");
        return ;
    }

    library.push(book);
}


/**
 * 
 * @param {string} isbn 
 * @returns {undefined}
 */
function checkoutBook(isbn){
    if (!isValidIsbn(isbn)){
        console.log("ISBN is not valid");
        return ;
    }

    let index = library.findIndex(book => book.isbn == isbn);

    if (index == -1){
        console.log("book with this ISBN is not present in library");
        return ;
    }

    if (library[index].checkedOut){
        console.log("book is already checkouted");
        return ;
    }

    if (library[index].checkoutCount == MAX_CHECKOUTS){
        console.log("max checkout limit reached");
        return ;
    }

    library[index].checkedOut = true;
    library[index].checkoutCount += 1;
    library[index].dueDate = new Date(Date.now() + DUE_TIME_INTERVAL);
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
 * @returns {undefined}
 */
function rateBook(isbn, rating){
    if (!isValidIsbn(isbn)){
        console.log("invalid ISBN");
        return ;
    }

    if (typeof rating != "number" || Math.trunc(rating) != rating || rating < 1 || rating > 5){
        console.log("invalid rating");
        return ;
    }

    let book = library.find(book => book.isbn == isbn);

    if (!book){
        console.log("book with this isbn does not exist in library");
        return ;
    }

    book.rating[rating - 1] += 1;
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
        totalNumberOfRatings = book.rating[i];
        totalRatings = book.rating[i] * (i + 1);
    }

    return totalRatings / totalNumberOfRatings;
}

/**
 * 
 * @param {string} isbn 
 * @returns {undefined}
 */
function returnBook(isbn){
    if (!isValidIsbn(isbn)){
        console.log("ISBN is not valid");
        return ;
    }

    let index = library.findIndex(book => book.isbn == isbn);

    if (index == -1){
        console.log("book with this ISBN was never added to library");
        return ;
    }

    if (!library[index].checkedOut){
        console.log("book was not checkouted");
        return ;
    }

    library[index].checkedOut = false;
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
 * @returns {undefined}
 */
function sortLibrary(criteria){
    if (typeof criteria != "string" || criteria != "title" || criteria != "author" || criteria != "average rating"){
        console.log("invalid criteria");
        return ;
    }

    if (criteria == "average rating"){
        library.sort((book1, book2) => getAverageRating(book1.isbn) - getAverageRating(book2.isbn));
        return ;
    }

    library.sort((book1, book2) => book1[criteria].localeCompare(book2[criteria]));
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
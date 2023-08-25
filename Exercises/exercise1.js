"use strict";

let library = [];

let isbnUsed = new Set();


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
    };
}


/**
 * 
 * @param {object} book 
 */
function addBookToLibrary(book){
    if (library.includes(book)){
        console.log("book already exists");
    } else {
        library.push(book);
    }
}


/**
 * 
 * @param {string} isbn 
 * @returns {undefined}
 */
function checkedoutBook(isbn){
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

    library[index].checkedOut = true;
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

    return library.filter(book => book.author == author);
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
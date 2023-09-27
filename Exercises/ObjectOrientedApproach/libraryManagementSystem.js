class FieldsMissingError extends Error {
    /**
     * 
     * @param {string} message 
     * @param  {...string} missingFields 
     * @returns {FieldsMissingError} FieldsMissingError object
     */
    constructor(...missingFields){
        super('atleast one of the mentioned fields is missing');
        this.missingFields = [...missingFields];
    }
}

class EmptyStringError extends Error {
    /**
     * 
     * @param {string} message 
     * @param  {...string} fields 
     * @returns {EmptyStringError} EmptyStringError object
     */
    constructor(...fields){
        super('following fields cant be empty');
        this.fields = [...fields];
    }
}

class User {
    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @returns {User} User object
     */
    constructor(firstName, lastName){
        User.validate(firstName, lastName);

        this.firstName = firstName;
        this.lastName = lastName;
        this.booksLended = new Set();
    }

    /**
     * @returns {string} return full name of that object
     */
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     */
    static validate(firstName, lastName){
        if (firstName === undefined || lastName === undefined){
            throw new FieldsMissingError('firstName', 'lastName');
        }

        if (typeof firstName != 'string' || typeof lastName != 'string'){
            throw new TypeError('string expected');
        }

        if (firstName == '' || lastName == ''){
            throw new EmptyStringError('firstName', 'lastName');
        }
    }
}

class Transaction {
    /**
     * 
     * @param {string} type 
     * @param {Date} date 
     * @param {User} user 
     * @returns {Transaction} Transaction object
     */
    constructor(type, date, user){
        Transaction.validate(type, date, user);
        
        this.type = type;
        this.date = date;
        this.user = user;
    }

    /**
     * 
     * @param {string} type 
     * @param {Date} date 
     * @param {User} user 
     */
    static validate(type, date, user){
        if (type === undefined, date === undefined, user === undefined){
            throw new FieldsMissingError('type', 'user', 'date');
        }

        if (typeof type != 'string' || !(date instanceof Date) || !(user instanceof User)){
            throw new TypeError('invalid type');
        }

        if (type != 'return' && type != 'checkout'){
            throw new Error(`type can only be of two types: 'return' or 'checkout'`);
        }
    }
}

class Review {
    /**
     * 
     * @param {object} obj 
     * @param {number} obj.rating
     * @param {string|undefined} obj.comment
     * @param {User} obj.user
     * @returns {Review}
     */
    constructor({rating, comment, user} = {}){
        Review.validate(rating, comment, user);

        this.rating = rating;
        this.comment = comment;
        this.user = user;
    }

    /**
     * 
     * @param {number} rating 
     * @param {string} comment 
     * @param {User} user 
     */
    static validate(rating, comment, user){
        if (rating === undefined || user === undefined){
            throw new FieldsMissingError('rating', 'user');
        }

        if (typeof rating != 'number' || rating < 1 || rating > 5 || Math.trunc(rating) != rating){
            throw new TypeError('Invalid value of rating: rating can only be a integer between 1 and 5 inclusive');
        }

        if (comment !== undefined && (typeof comment != 'string' || comment == '')){
            throw new TypeError('Invalid comment: comment can only be non empty string');
        }

        if (!(user instanceof User)){
            throw new TypeError('Invalid user: user has to be a instance of User');
        }
    }
}

class Book {
    static usedISBN = new Set();

    static get MAX_CHECKOUTS(){
        return 3;
    }

    static get DUE_TIME_INTERVAL(){
        return 1000 * 60 * 60 * 24;
    }

    /**
     * 
     * @param {string} title 
     * @param {string} author 
     * @param {string} isbn 
     * @returns {Book}
     */
    constructor(title, author, isbn){
        Book.validate(title, author, isbn);

        if (Book.usedISBN.has(isbn)) throw new Error('ISBN already taken');
        Book.usedISBN.add(isbn);

        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
        this.checkoutCount = 0;
        this.ratings = [];
        this.history = [];
        this.isAddedToLibrary = false;
    }

    /**
     * 
     * @param {string} title 
     * @param {string} author 
     * @param {string} isbn 
     */
    static validate(title, author, isbn){
        if (title === undefined || author === undefined || isbn === undefined){
            throw new FieldsMissingError('title', 'author', 'isbn');
        }

        if (typeof title != 'string' || typeof author != 'string' || typeof isbn != 'string'){
            throw new TypeError('String expected');
        }

        if (title == '' || author == '') throw new EmptyStringError('title', 'author');

        if (!Book.#isValidISBN(isbn)) throw new TypeError('Invalid ISBN');
    }

    /**
     * 
     * @param {string} isbn 
     * @returns {boolean} true if isbn is valid, false otherwise
     */
    static #isValidISBN(isbn){
        if (isbn.length != 17) return false;

        isbn = isbn.split('-');

        if (isbn.length != 5) return false;

        for (let part of isbn){
            if (part.trim() === '' || isNaN(part)){
                return false;
            }
        }

        return true;
    }

    addToLibrary(){
        if (Library.books.includes(this)){
            throw new Error('Book already exists');
        }

        this.isAddedToLibrary = true;
        Library.books.push(this);
    }

    /**
     * 
     * @param {User} user 
     */
    checkout(user){
        if (this.isCheckedOut) throw new Error('book is already checkedout');
        if (this.checkoutCount == Book.MAX_CHECKOUTS) throw new Error('Max checkout limit reached');
        if (!this.isAddedToLibrary) throw new Error('Book is not added to library');

        this.history.push(new Transaction('checkout', new Date(), user));
        user.booksLended.add(this);
        this.isCheckedOut = true;
        this.checkoutCount += 1;
    }

    return(){
        if (!this.isCheckedOut) throw new Error('book was never checked out');

        this.isCheckedOut = false;
        this.history.push(new Transaction('return', new Date(), this.history.at(-1).user));
    }

    /**
     * 
     * @param {object} obj 
     * @param {number} obj.rating 
     * @param {string|undefined} obj.comment 
     * @param {User} obj.user 
     */
    rate({rating, comment, user}={}){
        if (this.ratings.find(review => review.user == user)) throw new Error('User has already reviewed this book');

        this.ratings.push(new Review({rating, comment, user}));
    }

    /**
     * 
     * @returns {number} average rating of the book
     */
    calculateAverageRating(){
        if (this.ratings.length == 0) throw new Error(`cant't calculate average rating of an unrated book`);

        let totalRating = 0;

        for (let review of this.ratings){
            totalRating += review.rating;
        }

        return totalRating / this.ratings.length;
    }

    /**
     * 
     * @returns {number} total number of reviews of this book
     */
    getTotalReviews(){
        return this.ratings.length;
    }

    /**
     * 
     * @param {number} rating 
     * @returns {Array} array of reviews with having given rating
     */
    getReviewsWithRating(rating){
        if (typeof rating != 'number' || rating < 1 || rating > 5 || Math.trunc(rating) != rating){
            throw new TypeError('Invalid value of rating: rating can only be a integer between 1 and 5 inclusive');
        }

        return this.ratings.filter(review => review.rating == rating);
    }

    /**
     * 
     * @param {string} partialComment 
     * @returns {Array} array of reviews with comment partially or fully mathcing partialComment (case insensitive)
     */
    getReviewsWithComment(partialComment){
        let commentRegEx = new RegExp(partialComment, 'i');

        return this.ratings.filter(review => commentRegEx.test(review.comment));
    }
}

class Library {
    static books = [];

    /**
     * 
     * @returns {Array} array of books that have passed its due date
     */
    static getOverDueBooks(){
        return Library.books.filter(book => {
            if (book.isCheckedOut){
                if (Date.now() > book.history.at(-1).date.getTime() + Book.DUE_TIME_INTERVAL) return true;
            }
        });
    }

    /**
     * 
     * @param {string} partialAuthorName 
     * @returns {Array} array of books with author's name partially or fully matching partialAuthorName
     */
    static getBooksByAuthor(partialAuthorName){
        if (partialAuthorName === undefined) throw new FieldsMissingError('partialAuthorName');
        if (typeof partialAuthorName != 'string') throw new TypeError('String Expected');
        if (partialAuthorName == '') throw new EmptyStringError('partialAuthorName');

        let authorRegEx = new RegExp(partialAuthorName, 'i');
        return Library.books.filter(book => authorRegEx.test(book.author));
    }

    /**
     * 
     * @param {string} partialTitle 
     * @returns {Array} array of books with title partially or fully matching partialTitle
     */
    static getBooksByTitle(partialTitle){
        if (partialTitle === undefined) throw new FieldsMissingError('partialTitle');
        if (typeof partialTitle != 'string') throw new TypeError('String Expected');
        if (partialTitle == '') throw new EmptyStringError('partialTitle');

        let TitleRegEx = new RegExp(partialTitle, 'i');
        return Library.books.filter(book => TitleRegEx.test(book.title));
    }

    /**
     * 
     * @param {string} criteria 
     */
    static sort(criteria){
        if (typeof criteria != "string" || (criteria != "title" && criteria != "author" && criteria != "average rating")){
            throw new Error('Invalid criteria');
        }
    
        if (criteria == "average rating"){
            // higher rated book should come first in the array
            Library.books.sort((book1, book2) => (book2.calculateAverageRating() ?? 0) - (book1.calculateAverageRating() ?? 0));
            return ;
        }
    
        Library.books.sort((book1, book2) => book1[criteria].localeCompare(book2[criteria]));
    }

    static save(){
        localStorage.setItem('library', JSON.stringify(Library.books));
    }

    static load(){
        if (!localStorage.getItem('library')){
            throw new Error('Library not present in storage');
        }
    
        Library.books = JSON.parse(localStorage.getItem('library'));
    }
}
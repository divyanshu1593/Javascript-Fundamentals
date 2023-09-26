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

    constructor(title, author, isbn){
        Book.validate(title, author, isbn);
    }

    static validate(title, author, isbn){
        if (title === undefined || author === undefined || isbn === undefined){
            throw new FieldsMissingError('title', 'author', 'isbn');
        }

        if (typeof title != 'string' || typeof author != 'string' || typeof isbn != 'string'){
            throw new TypeError('String expected');
        }

        if (!Book.#isValidISBN(isbn)) throw new TypeError('Invalid ISBN');
    }

    static #isValidISBN(isbn){
        isbn = isbn.split('-');

        if (isbn.length != 5) return false;

        for (let part of isbn){
            if (part.trim() === '' || isNaN(part)){
                return false;
            }
        }

        return true;
    }
}
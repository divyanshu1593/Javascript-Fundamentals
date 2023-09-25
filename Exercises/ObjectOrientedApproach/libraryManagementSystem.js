class FieldsMissingError extends Error {
    /**
     * 
     * @param {string} message 
     * @param  {...string} missingFields 
     * @returns {object} FieldsMissingError object
     */
    constructor(message, ...missingFields){
        super(message);
        this.missingFields = [...missingFields];
    }
}

class EmptyStringError extends Error {
    /**
     * 
     * @param {string} message 
     * @param  {...string} fields 
     * @returns {object} EmptyStringError object
     */
    constructor(message, ...fields){
        super(message);
        this.fields = [...fields];
    }
}

class User {
    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @returns {object} User object
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
            throw new FieldsMissingError('atleast one of the mentioned fields is missing', 'firstName', 'lastName');
        }

        if (typeof firstName != 'string' || typeof lastName != 'string'){
            throw new TypeError('string expected');
        }

        if (firstName == '' || lastName == ''){
            throw new EmptyStringError('following fields cant be empty', 'firstName', 'lastName');
        }
    }
}

class Transaction {
    /**
     * 
     * @param {string} type 
     * @param {object} date 
     * @param {object} user 
     * @returns {object} Transaction object
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
     * @param {object} date 
     * @param {object} user 
     */
    static validate(type, date, user){
        if (type === undefined, date === undefined, user === undefined){
            throw new FieldsMissingError('atleast one of the mentioned fields is missing', 'type', 'user', 'date');
        }

        if (typeof type != 'string' || !(date instanceof Date) || !(user instanceof User)){
            throw new TypeError('invalid type');
        }

        if (type != 'return' && type != 'checkout'){
            throw new Error(`type can only be of two types: 'return' or 'checkout'`);
        }
    }
}


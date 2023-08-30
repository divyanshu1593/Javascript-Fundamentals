// Tests


describe('createBook', () => {
    beforeEach(() => {
        isbnUsed.clear();
    });

    afterEach(() => {
        isbnUsed.clear();
    });

    describe('validations', () => {
        it('string ISBNs', () => {
            assert(createBook('some title', 'some author', []) === undefined, 'ISBN must be a string');
            assert(createBook('some title', 'some author', {}) === undefined, 'ISBN must be a string');
            assert(createBook('some title', 'some author', 55) === undefined, 'ISBN must be a string');
        });

        it('string titles', () => {
            assert(createBook([], 'some author', '123-12-124-12-245') === undefined, 'title must be a string');
            assert(createBook({}, 'some author', '123-12-124-12-245') === undefined, 'title must be a string');
            assert(createBook(234, 'some author', '123-12-124-12-245') === undefined, 'title must be a string');
        });

        it('string author', () => {
            assert(createBook('some title', [], '123-12-124-12-245') === undefined, 'author must be a string');
            assert(createBook('some title', {}, '123-12-124-12-245') === undefined, 'author must be a string');
            assert(createBook('some title', 235, '123-12-124-12-245') === undefined, 'autor must be a string');
        });

        it('title present', () => {
            let book = createBook(undefined, 'some author', '123-12-124-12-245');

            if (book){
                assert(book.title !== undefined, 'title should be provided');
            }
        });

        it('author present', () => {
            let book = createBook('some title', undefined, '123-12-124-12-245');

            if (book){
                assert(book.author !== undefined, 'author should be provided');
            }
        });

        it('ISBN present', () => {
            let book = createBook('some title', 'some author');

            if (book){
                assert(book.isbn !== undefined, 'isbn should be provided');
            }
        });
    });

    describe('unique ISBNs', () => {
        it('book with unique ISBN', () => {
            let book = createBook('some title', 'some author', '123-123-123-12-12');

            assert(book !== undefined, 'book has unique isbn, so it should had been created');
        });

        it('book with same ISBN', () => {
            let book1 = createBook('some title', 'some author', '123-123-123-12-12');
            let book2 = createBook('other title', 'other author', '123-123-123-12-12');

            assert(book2 === undefined, 'book2 should not be created because it has used ISBN');
        });
    });

    describe('return object', () => {
        it('normal object', () => {
            let book = createBook('some title', 'some author', '123-123-123-12-12');

            assert.deepEqual(book, {
                title: 'some title',
                author: 'some author',
                isbn: '123-123-123-12-12',
                checkedOut: false,
                checkoutCount: 0,
                rating: [0, 0, 0, 0, 0]
            });
        });
    });
});


describe('library', () => {
    it('is an array', () => {
        assert(Array.isArray(library), 'library has to be an array');
    });

    it('contains valid objects', () => {
        for (book of library){
            assert(isValidBookObject(book), 'book object is invalid');
        }
    });

    function isValidBookObject(book){
        if (book.title !== undefined) return false;
        if (book.author !== undefined) return false;
        if (book.isbn !== undefined) return false;
        if (book.checkedOut !== undefined) return false;
        if (book.checkoutCount !== undefined) return false;
        if (book.rating !== undefined) return false;
        
        return true;
    }
});
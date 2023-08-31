// Tests


describe('createBook', () => {
    beforeEach(() => {
        isbnUsed.clear();
    });

    afterEach(() => {
        isbnUsed.clear();
    });

    describe('validations', () => {
        describe('isbn', () => {
            it('fail on invalid isbn', () => {
                assert(!isValidBookObject(createBook('some title', 'some author', [])), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', {})), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', 55)), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', '123-123-')), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', '')), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', '123214-124-124-24-141-24-2')), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', '-123-123-123-1212')), 'should fail on invalid isbn');
                assert(!isValidBookObject(createBook('some title', 'some author', '123-123-123-12-a2')), 'should fail on invalid isbn');
            });

            it('fails when isbn is absent', () => {
                assert(!isValidBookObject(createBook('some title', 'some author')), 'should fail when isbn is absent');
            });
    
            it('works for valid isbn', () => {
                assert(isValidBookObject(createBook('some title', 'some author', '123-123-123-12-12')), 'should work on valid isbn');
            });
        });
        
        describe('title', () => {
            it('fail on invalid titles', () => {
                assert(!isValidBookObject(createBook([], 'some author', '123-12-124-12-245')), 'should fail on invalid title');
                assert(!isValidBookObject(createBook({}, 'some author', '123-12-124-12-245')), 'should fail on invalid title');
                assert(!isValidBookObject(createBook(234, 'some author', '123-12-124-12-245')), 'should fail on invalid title');
                assert(!isValidBookObject(createBook('', 'some author', '123-12-124-12-245')), 'should fail on invalid title');
            });
    
            it('works on valid title', () => {
                assert(isValidBookObject(createBook('valid title', 'some author', '123-12-124-12-245')), 'should work on valid title');
            });

            it('use default title when title not given', () => {
                assert(isValidBookObject(createBook(undefined, 'some author', '123-12-124-12-245')), 'should work when title not given');
            });
        });
        
        describe('author', () => {
            it('fails on invalid author', () => {
                assert(!isValidBookObject(createBook('some title', [], '123-12-124-12-245')), 'should fail on invalid author');
                assert(!isValidBookObject(createBook('some title', {}, '123-12-124-12-245')), 'should fail on invalid author');
                assert(!isValidBookObject(createBook('some title', 235, '123-12-124-12-245')), 'should fail on invalid author');
            });

            it('works on valid author', () => {
                assert(isValidBookObject(createBook('some title', 'valid autor', '123-12-124-12-245')), 'should work on valid author');
            });

            it('use default title when author not given', () => {
                assert(isValidBookObject(createBook('some title', undefined, '123-12-124-12-245')), 'should work when title not given');
            });
        });
    });

    describe('unique ISBNs', () => {
        it('works with unique ISBN', () => {
            let book = createBook('some title', 'some author', '123-123-123-12-12');

            assert(book !== undefined, 'book has unique isbn, so it should had been created');
        });

        it('fails on same ISBN', () => {
            let book1 = createBook('some title', 'some author', '123-123-123-12-12');
            let book2 = createBook('other title', 'other author', '123-123-123-12-12');

            assert(book2 === undefined, 'book2 should not be created because it has used ISBN');
        });
    });

    describe('return', () => {
        it('returns valid book object', () => {
            assert(isValidBookObject(createBook('some title', 'some author', '123-132-123-12-12')), 'should return valid book object');
        });
    });
});


describe('library', () => {
    before(() => {
        let book1 = createBook('some title', 'some author', '123-123-123-12-12');
        addBookToLibrary(book1);
        let book2 = createBook('other title', 'other author', '213-123-123-12-13');
        addBookToLibrary(book2);
    });

    after(() => {
        library = [];
    });

    it('is an array', () => {
        assert(Array.isArray(library), 'library has to be an array');
    });

    it('contains valid objects', () => {
        for (book of library){
            assert(isValidBookObject(book), 'book object is invalid');
        }
    });

    it('fail on invalid objects', () => {
        assert.throws(() => {
            let fakeBook = {
                title: 'fake book',
                author: 'fake author',
                isbn: '112-132-123-12-21'
            }
    
            library.push(fakeBook);
            for (book of library){
                assert(isValidBookObject(book), 'book object is invalid');
            }
        });
    });
});




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
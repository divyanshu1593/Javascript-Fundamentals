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

describe('addBookToLibrary', () => {
    beforeEach(() => {
        library = [];
        isbnUsed.clear();
    });

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('does not add invalid book', () => {
        let invalidBook = {
            key: 'some invalid book object'
        }

        assert(!addBookToLibrary(invalidBook), 'should not be able to add invalid book')
    });

    it('does not add duplicate book', () => {
        let orignalBook = createBook('some title', 'some author', '123-13-123-123-23');
        addBookToLibrary(orignalBook);

        let duplicateBook = {
            title: 'some title',
            author: 'some author',
            isbn: '123-13-123-123-23',
            checkedOut: false,
            checkoutCount: 0,
            rating: [0, 0, 0, 0, 0]
        }

        assert(!addBookToLibrary(duplicateBook), 'should not be able to add a duplicate book');
    });

    it('does not add already added book', () => {
        let book = createBook('some title', 'some author', '123-13-123-123-23');
        assert(addBookToLibrary(book));

        assert(!addBookToLibrary(book), 'should not be able to add already added book');
    });

    it('do add a valid new book', () => {
        let book = createBook('some title', 'some author', '123-13-123-123-23');

        assert(addBookToLibrary(book), 'should be able to add a new valid book');
    });
});

describe('checkoutBook', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('fails to checkout when invalid isbn provided', () => {
        assert(!checkoutBook('123-12-'), 'should fail when isbn is invalid');
    });

    it('fails to checkout when book with isbn does not exist', () => {
        assert(!checkoutBook('123-123-123-12-12'), 'should fail when book with isbn does not exist');
    });

    it('fails to checkout when book with isbn is already checkedout', () => {
        checkoutBook('111-111-111-11-11');
        assert(!checkoutBook('111-111-111-11-11'), 'should fail when book with isbn is already checked out');
    });

    it('fails to checkout when checkoutCount limit is reached', () => {
        checkoutBook('111-111-111-11-11');
        returnBook('111-111-111-11-11');
        checkoutBook('111-111-111-11-11');
        returnBook('111-111-111-11-11');
        checkoutBook('111-111-111-11-11');
        returnBook('111-111-111-11-11');

        assert(!checkoutBook('111-111-111-11-11'), 'should fail when checkoutCount limit is reached');
    });

    it('able to checkout when everything is correct', () => {
        assert(checkoutBook('111-111-111-11-11'), 'should be able to checkout a valid book');
    });
});

describe('returnBook', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('fails to return book when invalid isbn provided', () => {
        assert(!returnBook('123-12-'), 'should fail when isbn is invalid');
    });

    it('fails to return when book with isbn does not exist', () => {
        assert(!returnBook('123-123-123-12-12'), 'should fail when book with isbn does not exist');
    });

    it('fails to checkout when book with isbn is not checkedout', () => {
        assert(!returnBook('111-111-111-11-11'), 'should fail when book with isbn is already checked out');
    });
});

describe('findBooksByAuthor', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('fails when invalid author is given', () => {
        assert(!findBooksByAuthor([]), 'should fail on when invalid author is given');
    });

    it('fails when author is not given', () => {
        assert(!findBooksByAuthor(), 'should fail on when author is not given');
    });

    it('able to find book with exact match', () => {
        let books = findBooksByAuthor('demo author1');
        
        let flag1 = books.find(book => book.isbn == '111-111-111-11-11');
        let flag2 = books.find(book => book.isbn == '111-111-111-11-12');

        assert(books.length == 2 && flag1 && flag2, 'should give array of book with exact author name');
    });

    it('able to find book with partial match', () => {
        let books = findBooksByAuthor('author1');
        
        let flag1 = books.find(book => book.isbn == '111-111-111-11-11');
        let flag2 = books.find(book => book.isbn == '111-111-111-11-12');

        assert(books.length == 2 && flag1 && flag2, 'should give array of book with partial author name');
    });
});


describe('overdue books', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('checkedOut book has dueDate property', () => {
        checkoutBook('111-111-111-11-13');
        checkoutBook('111-111-111-11-14');

        for (let book of library){
            if (book.checkedOut){
                assert('dueDate' in book, 'checkedout books must contail a due date property');
            }
        }
    });

    describe('listOverdueBooks', () => {
        it('returns a array', () => {
            assert(Array.isArray(listOverdueBooks()), 'it should return a array');
        });

        it('array only contains book that have passed there due date', () => {
            MockDate.set(Date.now() - (DUE_TIME_INTERVAL + 1));
            checkoutBook('111-111-111-11-11');  // checked out more than due time interval
            MockDate.reset();

            MockDate.set(Date.now() - 1000 * 60 * 60 * 5);
            checkoutBook('111-111-111-11-12');  // checked out 5 hours ago
            MockDate.reset()

            let books = listOverdueBooks();

            assert(books.length == 1 && books.find(book => book.isbn == '111-111-111-11-11'), 'should return the array that only contains the books that have passed due date');
        });
    });
});

describe('book rating system', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    describe('rateBook', () => {
        it('fails on invalid isbn', () => {
            assert(!rateBook('141424-24-', 5), 'should fail if isbn is not valid');
        });

        it('fails if isbn is absent', () => {
            assert(!rateBook(undefined, 5), 'should fail if isbn is not given');
        });

        it('fails on invalid rating', () => {
            assert(!rateBook('111-111-111-11-11', 23.2), 'rating should be integer from 1 to 5 inclusive');
            assert(!rateBook('111-111-111-11-11'), 'rating should be integer from 1 to 5 inclusive');
            assert(!rateBook('111-111-111-11-11', 0), 'rating should be integer from 1 to 5 inclusive');
            assert(!rateBook('111-111-111-11-11', 2n), 'rating should be integer from 1 to 5 inclusive');
            assert(!rateBook('111-111-111-11-11', '5'), 'rating should be integer from 1 to 5 inclusive');
        });

        it('fail if book with isbn does not exist in library', () => {
            assert(!rateBook('111-000-111-11-11', 5), 'should fail when book with given isbn is not present in library');
        });

        it('works when correct data is given', () => {
            assert(rateBook('111-111-111-11-11', 5), 'should work when the given isbn and rating are valid');
        });
    });

    describe('getAverageRating', () => {
        it('fails on invalid isbn', () => {
            assert(!getAverageRating('141424-24-'), 'should fail if isbn is not valid');
        });

        it('fails if isbn is absent', () => {
            assert(!getAverageRating(), 'should fail if isbn is not given');
        });

        it('fails when book with isbn is not in library', () => {
            assert(!getAverageRating('123-123-123-12-12'), 'should fail when book with given isbn is not in library');
        });

        it('fails when book with given isbn is not rated once', () => {
            assert(!getAverageRating('111-111-111-11-11'), 'should fail when book with thi isbn is not rated a single time');
        });

        it('gives correct average values', () => {
            rateBook('111-111-111-11-11', 4);
            rateBook('111-111-111-11-11', 3);
            rateBook('111-111-111-11-14', 5);
            rateBook('111-111-111-11-11', 2);
            rateBook('111-111-111-11-11', 5);

            assert(getAverageRating('111-111-111-11-11') == 3.5, 'should give correct average rating of the book');
            assert(getAverageRating('111-111-111-11-14') == 5, 'should give correct average rating of the book');
        });
    });
});

describe('searchBooks', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('fails on invalid queries', () => {
        assert(!searchBooks([]), 'should not work for invalid query');
    });

    it('fails if query is not given', () => {
        assert(!searchBooks(), 'should not work if query is not given');
    });

    it('works for exact match of title', () => {
        let books = searchBooks('some different title');

        let flag1 = books.find(book => book.isbn == '111-111-111-11-14');
        let flag2 = books.find(book => book.isbn == '111-111-111-11-15');

        assert(books.length == 2 && flag1 && flag2, 'should give array of books that match the title');
    });

    it('works for exact match of author', () => {
        let books = searchBooks('divyanshu');

        let flag1 = books.find(book => book.isbn == '111-111-111-11-14');

        assert(books.length == 1 && flag1, 'should give array of books that match the author');
    });

    it('works for partial match of title', () => {
        let books = searchBooks('boks by the title "some different title"');

        let flag1 = books.find(book => book.isbn == '111-111-111-11-14');
        let flag2 = books.find(book => book.isbn == '111-111-111-11-15');

        assert(books.length == 2 && flag1 && flag2, 'should give array of books that match the title');
    });

    it('works for partial match of author', () => {
        let books = searchBooks('book written by divyanshu motivaras');

        let flag1 = books.find(book => book.isbn == '111-111-111-11-14');

        assert(books.length == 1 && flag1, 'should give array of books that match the author');
    });
});

describe('sortLibrary', () => {
    beforeEach(prePopulateLibrary);

    afterEach(() => {
        library = [];
        isbnUsed.clear();
    });

    it('fails on invalid criteria', () => {
        assert(!sortLibrary('invalid criteria'), 'should fail if criteria is invalid');
        assert(!sortLibrary(''), 'should fail if criteria is invalid');
        assert(!sortLibrary({}), 'should fail if criteria is invalid');
    });

    it('sorts by title', () => {
        sortLibrary('title');

        for (let i=1; i<library.length; i++){
            assert(library[i].title >= library[i-1].title, 'the library should be sorted by title');
        }
    });

    it('sorts by author', () => {
        sortLibrary('author');

        for (let i=1; i<library.length; i++){
            assert(library[i].author >= library[i-1].author, 'the library should be sorted by author');
        }
    });

    describe('sorts by average rating', () => {
        it('works when every book in library is rated', () => {
            rateBook('111-111-111-11-11', 1);
            rateBook('111-111-111-11-12', 3);
            rateBook('111-111-111-11-13', 2);
            rateBook('111-111-111-11-14', 5);
            rateBook('111-111-111-11-15', 4);

            sortLibrary('average rating');

            for (let i=1; i<library.length; i++){
                assert(getAverageRating(library[i].isbn) <= getAverageRating(library[i-1].isbn), 'books with higher average rating shoud come first in the library');
            }
        });

        it('works when some/all books are not rated', () => {
            rateBook('111-111-111-11-14', 5);
            rateBook('111-111-111-11-15', 4);

            sortLibrary('average rating');

            for (let i=1; i<library.length; i++){
                assert((getAverageRating(library[i].isbn)??0) <= (getAverageRating(library[i-1].isbn)??0), 'books with higher average rating shoud come first in the library and unrated books should be at the end');
            }
        });
    });
});

describe('advanced storage', () => {
    let initLibrary;

    before(() => {
        initLibrary = JSON.parse(localStorage.getItem('library'));
    });

    after(() => {
        localStorage.setItem('library', JSON.stringify(initLibrary));
    });

    it('saves library', () => {
        prePopulateLibrary();

        saveLibrary();

        assert(localStorage.getItem('library') == JSON.stringify(library), 'library should be store in local storage')
    });

    it('loads library', () => {
        let unmodifiedLibrary = structuredClone(library);

        library = [/* modified library */];

        loadLibrary();

        assert.deepEqual(library, unmodifiedLibrary);
    });
});

function prePopulateLibrary(){
    addBookToLibrary(createBook('demo book 1', 'demo author1', '111-111-111-11-11'));
    addBookToLibrary(createBook('demo book 2', 'demo author1', '111-111-111-11-12'));
    addBookToLibrary(createBook('demo book 3', 'demo author2', '111-111-111-11-13'));
    addBookToLibrary(createBook('some different title', 'divyanshu', '111-111-111-11-14'));
    addBookToLibrary(createBook('some different title', 'demo author2', '111-111-111-11-15'));
}

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
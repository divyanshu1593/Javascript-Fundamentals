"use strict";

describe('User', () => {
    it('fails on missing fields', () => {
        assert.throws(() => {
            new User();
        });

        assert.throws(() => {
            new User('Divyanshu');
        });
    });

    it('fails on invalid types', () => {
        assert.throws(() => {
            new User(5, 'Motivaras');
        });

        assert.throws(() => {
            new User(5, true);
        });
    });

    it('fails on empty name', () => {
        assert.throws(() => {
            new User('', 'Motivaras');
        });

        assert.throws(() => {
            new User('Divyanshu', '');
        });
    });

    it('works on valid inputs', () => {
        let user = new User('Divyanshu', 'Motivaras');

        assert.equal(user.fullName, 'Divyanshu Motivaras');
    });

    it('maintains lending history', () => {
        let user = new User('some', 'user');
        let book = new Book('some title', 'some author', '123-12-123-123-12');

        book.addToLibrary();
        book.checkout(user);

        assert(user.booksLended.has(book), 'checked out book should be in user.booksLended');
    });
});

describe('Transaction', () => {
    let user;
    before(() => {
        user = new User('Divyanshu', 'Motivaras');
    });

    it('fails on missing fields', () => {
        assert.throws(() => {
            new Transaction();
        });

        assert.throws(() => {
            new Transaction('checkout');
        });

        assert.throws(() => {
            new Transaction('return', new Date());
        });
    });

    it('fails on invalid types', () => {
        assert.throws(() => {
            new Transaction('checkout', '2023-09-25T18:55:51.540Z', user);
        });

        assert.throws(() => {
            new Transaction('return', new Date(), {});
        });

        assert.throws(() => {
            new Transaction(false, new Date(), user);
        });
    });

    it('fails on wrong value of type attribute', () => {
        assert.throws(() => {
            new Transaction('some wrong value', new Date(), user);
        });

        assert.throws(() => {
            new Transaction('returns', new Date(), user);
        });

        assert.throws(() => {
            new Transaction('checkOut', new Date(), user);
        });
    });

    it('works on valid inputs', () => {
        let transaction = new Transaction('checkout', new Date(), user);
        assert.equal(transaction.type, 'checkout');
        assert.equal(transaction.user.fullName, 'Divyanshu Motivaras');
    });
});

describe('Review', () => {
    let userObj;
    before(() => {
        userObj = new User('Divyanshu', 'Motivaras');
    });

    it('fails on missing fields', () => {
        assert.throws(() => {
            new Review();
        });

        assert.throws(() => {
            new Review({rating: 5, comment: 'some comment'});
        });

        assert.throws(() => {
            new Review({comment: 'some comment'});
        });
    });

    it('fails on invalid rating', () => {
        assert.throws(() => {
            new Review({rating: '5', user: userObj});
        });

        assert.throws(() => {
            new Review({rating: 5.5, user: userObj});
        });

        assert.throws(() => {
            new Review({rating: Infinity, user: userObj});
        });

        assert.throws(() => {
            new Review({rating: NaN, user: userObj});
        });
    });

    it('fails on invalid comment', () => {
        assert.throws(() => {
            new Review({rating: 5, user: userObj, comment: true});
        });

        assert.throws(() => {
            new Review({rating: 5, user: userObj, comment: ''});
        });

        assert.throws(() => {
            new Review({rating: 5, user: userObj, comment: 35});
        });
    });

    it('fails on invalid user object', () => {
        assert.throws(() => {
            new Review({rating: 5, user: false});
        });

        assert.throws(() => {
            new Review({rating: 5, user: {firstName: 'Divyanshu', lastName: 'Motivaras'}});
        });

        assert.throws(() => {
            new Review({rating: 5, user: 'Divyanshu Motivaras'});
        });
    });

    it('works on valid inputs', () => {
        let review = new Review({rating: 5, user: userObj});

        assert.equal(review.rating, 5);
        assert.equal(review.user.fullName, 'Divyanshu Motivaras');

        let review2 = new Review({rating: 3, comment: 'it was ok', user: userObj});

        assert.equal(review2.rating, 3);
        assert.equal(review2.comment, 'it was ok');
        assert.equal(review2.user.fullName, 'Divyanshu Motivaras');
    });
});

describe('Book', () => {
    beforeEach(() => {
        Book.usedISBN.clear();
        Library.books = [];
    });

    describe('Creating Book object', () => {
        it('fails on missing fields', () => {
            assert.throws(() => {
                new Book();
            });

            assert.throws(() => {
                new Book('some title', 'some author');
            });

            assert.throws(() => {
                new Book('some title', undefined, '111-111-111-11-12');
            });
        });

        it('fails on invalid types', () => {
            assert.throws(() => {
                new Book('some title', true, '123-12-123-123-12');
            });

            assert.throws(() => {
                new Book('some title', 'some author', ['123-12-123-123-12']);
            });

            assert.throws(() => {
                new Book(NaN, 'some author', '123-12-123-123-12');
            });
        });

        it('fails on empty title or author name', () => {
            assert.throws(() => {
                new Book('', 'some author', '123-12-123-123-12');
            });

            assert.throws(() => {
                new Book('some title', '', '123-12-123-123-12');
            });
        });

        it('fails on invalid ISBN', () => {
            assert.throws(() => {
                new Book('some title', 'some author', '1231232312415535325');
            });

            assert.throws(() => {
                new Book('some title', 'some author', '123-12-123-123121');
            });

            assert.throws(() => {
                new Book('some title', 'some author', '123-12-123-123-12-');
            });

            assert.throws(() => {
                new Book('some title', 'some author', '123-12-123-123-121');
            });

            assert.throws(() => {
                new Book('some title', 'some author', '123-12-123-123123-');
            });
        });

        it('fails on repeating ISBN', () => {
            assert.throws(() => {
                new Book('some title', 'some author', '123-12-123-123-12');
                new Book('other title', 'other author', '123-12-123-123-12');
            });
        });

        it('works on valid inputs', () => {
            let book = new Book('python tutorial', 'Divyanshu Motivaras', '123-1234-12-123-5');

            assert.equal(book.title, 'python tutorial');
            assert.equal(book.author, 'Divyanshu Motivaras');
            assert.equal(book.isbn, '123-1234-12-123-5');
            assert.equal(book.isCheckedOut, false);
            assert.equal(book.history.length, 0);
            assert.equal(book.checkoutCount, 0);
            assert.equal(book.ratings.length, 0);
        });
    });

    describe('addToLibrary', () => {
        let book;
        before(() => {
            book = new Book('python tutorial', 'Divyanshu Motivaras', '123-12-123-123-12');
        });

        it('works for adding a valid book to library', () => {
            book.addToLibrary();

            assert(Library.books.find(bookItem => bookItem == book), 'library should have the added book')
        });

        it('fails on adding already existing book', () => {
            assert.throws(() => {
                book.addToLibrary();
                book.addToLibrary();
            });
        });
    });

    describe('checkout', () => {
        let book;
        let userObj;
        beforeEach(() => {
            book = new Book('python tutorial', 'Divyanshu Motivaras', '123-12-123-123-12');
            userObj = new User('Divyanshu', 'Motivaras');
        });

        it('fails on checking out already checkedout book', () => {
            assert.throws(() => {
                book.addToLibrary();
                book.checkout(userObj);
                book.checkout(userObj);
            });
        });

        it('fails on exceding checkout limit', () => {
            assert.throws(() => {
                book.addToLibrary();

                for (let i = 0; i < Book.MAX_CHECKOUTS + 1; i++){
                    book.checkout(userObj);
                    book.return();
                }
            });
        });

        it('fails on checking out book not added to library', () => {
            assert.throws(() => {
                book.checkout(userObj);
            });
        });

        it('works on valid inputs', () => {
            book.addToLibrary();
            book.checkout(userObj);
            assert(book.history.at(-1) instanceof Transaction, 'history array should constain objects of Transaction');
            assert.equal(book.history.at(-1).type, 'checkout');
            assert.deepEqual(book.history.at(-1).user, userObj);
            assert(book.history.at(-1).date instanceof Date, 'history.date should be a object of Date');
            assert.equal(book.isCheckedOut, true);
            assert.equal(book.checkoutCount, 1);
        })
    });

    describe('return', () => {
        let book;
        let userObj;
        beforeEach(() => {
            book = new Book('python tutorial', 'Divyanshu Motivaras', '123-12-123-123-12');
            userObj = new User('Divyanshu', 'Motivaras');
        });

        it('fails on returning not checked out book', () => {
            assert.throws(() => {
                book.return();
            });
        });

        it('works on valid inputs', () => {
            book.addToLibrary();
            book.checkout(userObj);

            book.return();
            assert.equal(book.history.at(-1).type, 'return');
            assert.deepEqual(book.history.at(-1).user, userObj);
            assert(book.history.at(-1).date instanceof Date);
        });
    });

    describe('Rating', () => {
        describe('rate', () => {
            it('fails when has already reviewed book', () => {
                let book = new Book('some title', 'some string', '123-12-123-123-12');
                let userObj = new User('some', 'user');
    
                book.rate({
                    rating: 3,
                    user: userObj
                });
    
                assert.throws(() => {
                    book.rate({
                        rating: 5,
                        user: userObj
                    });
                });
            });
    
            it('works on valid inputs', () => {
                let book = new Book('some title', 'some string', '123-12-123-123-12');
                let userObj = new User('some', 'user');
                let userObj2 = new User('other', 'user');
                book.rate({
                    rating: 5,
                    user: userObj
                });
    
                book.rate({
                    rating: 2,
                    comment: 'some comment',
                    user: userObj2
                });
    
                assert.equal(book.ratings.length, 2);
                assert.equal(book.ratings[0].rating, 5);
                assert.equal(book.ratings[0].user, userObj);
                assert.equal(book.ratings[1].rating, 2);
                assert.equal(book.ratings[1].comment, 'some comment');
                assert.deepEqual(book.ratings[1].user, userObj2);
            });
        });

        describe('calculateAverageRating', () => {
            it('fails on finding average rating of unrated book', () => {
                assert.throws(() => {
                    let book = new Book('some title', 'some author', '123-12-123-123-12');
                    book.calculateAverageRating();
                });
            });

            it('works and give correct average on rated books', () => {
                let book = new Book('some title', 'some author', '123-12-123-123-12');

                let user1 = new User('user', '1');
                let user2 = new User('user', '2');
                let user3 = new User('user', '3');

                book.rate({
                    rating: 3,
                    comment: 'some comment',
                    user: user1
                });

                book.rate({
                    rating: 2,
                    user: user2
                });

                book.rate({
                    rating: 5,
                    user: user3
                });

                assert.equal(book.calculateAverageRating().toFixed(2), 3.33);
            });
        });

        describe('getTotalReviews', () => {
            it('gives correct numbers of reviews', () => {
                let book = new Book('some title', 'some author', '123-12-123-123-12');

                let user1 = new User('user', '1');
                let user2 = new User('user', '2');
                let user3 = new User('user', '3');

                book.rate({
                    rating: 3,
                    comment: 'some comment',
                    user: user1
                });

                assert.equal(book.getTotalReviews(), 1);

                book.rate({
                    rating: 2,
                    user: user2
                });

                assert.equal(book.getTotalReviews(), 2);

                book.rate({
                    rating: 5,
                    user: user3
                });

                assert.equal(book.getTotalReviews(), 3);
            });
        });

        describe('getReviewsWithRating', () => {
            let book;
            beforeEach(() => {
                book = new Book('some title', 'some author', '123-12-123-123-12');

                let user1 = new User('user', '1');
                let user2 = new User('user', '2');
                let user3 = new User('user', '3');

                book.rate({
                    rating: 3,
                    comment: 'some comment',
                    user: user1
                });

                book.rate({
                    rating: 3,
                    user: user2
                });

                book.rate({
                    rating: 5,
                    user: user3
                });
            });

            it('fails on invalid rating', () => {
                assert.throws(() => {
                    book.getReviewsWithRating(33);
                    book.getReviewsWithRating(3.3);
                    book.getReviewsWithRating('3.3');
                });
            });

            it('works on valid rating', () => {
                let reviews = book.getReviewsWithRating(3);

                assert.equal(reviews.length, 2);
            });
        });

        describe('getReviewWithComment', () => {
            it('works on valid comments', () => {
                let book = new Book('some title', 'some author', '123-12-123-123-12');

                let user1 = new User('user', '1');
                let user2 = new User('user', '2');
                let user3 = new User('user', '3');

                book.rate({
                    rating: 3,
                    comment: 'some comment',
                    user: user1
                });

                book.rate({
                    rating: 3,
                    user: user2,
                });

                book.rate({
                    rating: 5,
                    user: user3,
                    comment: 'some kind of comment'
                });

                let reviews = book.getReviewsWithComment('sOmE');
                assert.equal(reviews.length, 2);
                assert.equal(reviews[0].comment, 'some comment');
                assert.equal(reviews[1].comment, 'some kind of comment');
            });
        });
    });
});

describe('Library', () => {
    beforeEach(() => {
        Book.usedISBN.clear();
        Library.books = [];
    });

    describe('getOverDueBooks', () => {
        it('gives all correct books which have passed the due date', () => {
            let book1 = new Book('some title', 'some author', '123-12-123-123-12');
            let user = new User('some', 'user');

            book1.addToLibrary();
            MockDate.set(Date.now() - (Book.DUE_TIME_INTERVAL + 1));
            book1.checkout(user);
            MockDate.reset();

            let book2 = new Book('other title', 'other author', '321-12-123-123-12');

            book2.addToLibrary();
            book2.checkout(user);

            let dueBooks = Library.getOverDueBooks();
            assert.equal(dueBooks.length, 1);
            assert.equal(dueBooks[0], book1);
        });
    });

    describe('getBooksByAuthor', () => {
        beforeEach(() => {
            let book1 = new Book('some title', 'Divyanshu Motivaras', '123-12-123-123-12');
            let book2 = new Book('some title', 'some person', '123-12-123-123-13');
            let book3 = new Book('some title', 'Ronit Motivaras', '123-12-123-123-15');

            book1.addToLibrary();
            book2.addToLibrary();
            book3.addToLibrary();
        });

        it('fails on invalid author name', () => {
            assert.throws(() => {
                Library.getBooksByAuthor();
            });

            assert.throws(() => {
                Library.getBooksByAuthor('');
            });

            assert.throws(() => {
                Library.getBooksByAuthor(55);
            });
        });

        it('gives correct book on correct author name', () => {
            let books = Library.getBooksByAuthor('moTiVarAs');
            assert.equal(books.length, 2);
            assert.equal(books[0].author, 'Divyanshu Motivaras');
            assert.equal(books[1].author, 'Ronit Motivaras');
        });
    });

    describe('getBooksByTitle', () => {
        beforeEach(() => {
            let book1 = new Book('some title', 'Divyanshu Motivaras', '123-12-123-123-12');
            let book2 = new Book('something', 'some person', '123-12-123-123-13');
            let book3 = new Book('other thing', 'Ronit Motivaras', '123-12-123-123-15');

            book1.addToLibrary();
            book2.addToLibrary();
            book3.addToLibrary();
        });

        it('fails on invalid title', () => {
            assert.throws(() => {
                Library.getBooksByTitle();
            });

            assert.throws(() => {
                Library.getBooksByTitle('');
            });

            assert.throws(() => {
                Library.getBooksByTitle(55);
            });
        });

        it('gives correct book on correct title', () => {
            let books = Library.getBooksByTitle('SOme');
            assert.equal(books.length, 2);
            assert.equal(books[0].title, 'some title');
            assert.equal(books[1].title, 'something');
        });
    });
});
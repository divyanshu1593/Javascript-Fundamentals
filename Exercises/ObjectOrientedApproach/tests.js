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
            assert.equal(book.checkoutCount, 0);
            assert.equal(book.rating.length, 0);
            assert.equal(book.history.length, 0);
            assert.strictEqual(book.dueDate, null);
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
        before(() => {
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
            // to be written (because return method is not implemented yet)
        });

        it('fails on checking out book not added to library', () => {
            assert.throws(() => {
                console.log(Library.books);
                book.addToLibrary();
                console.log(Library.books);
                book.checkout(userObj);
            });
        });

        // it();
    });
});
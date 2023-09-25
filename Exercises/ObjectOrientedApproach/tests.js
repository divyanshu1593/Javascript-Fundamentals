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
# Exercise: Library Management
Scenario: Imagine you are developing a small library management system. The library stores books, and each book has the following properties:

- title - The title of the book
- author - The author of the book
- isbn - The unique ISBN number for the book
- checkedOut - A boolean that indicates whether the book is checked out or not.
## Tasks:
### Book Object Creation:
Create a function createBook(title, author, isbn) that takes in a book's title, author, and ISBN and returns an object with the given details and a default checkedOut status of false.
### Library Array:
Create an array library that will store all the book objects.
### Add Books:
Write a function addBookToLibrary(book) that takes a book object and adds it to the library array.
### Checkout Book:
Write a function checkoutBook(isbn) that takes an ISBN number, searches the library for a book with that ISBN, and changes its checkedOut status to true.
### Return Book:
Write a function returnBook(isbn) that takes an ISBN number, searches the library for a book with that ISBN, and changes its checkedOut status to false.

### Find Book by Author:
Write a function findBooksByAuthor(author) that takes an author's name and returns an array of books written by that author.
## Test Cases:

- Create a few books using createBook().
- Add these books to the library.
- Check out a few books using their ISBNs.
- Return a book.
- Find all books by a specific author.

## Sample Data for library array
```
const library = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "978-0-06-112008-4",
        checkedOut: false
    },
    {
        title: "1984",
        author: "George Orwell",
        isbn: "978-0-452-28423-4",
        checkedOut: true
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        isbn: "978-0-06-085052-4",
        checkedOut: false
    }
];
```
## Notes
- All your code must be executable directly from a browser console for testing.
- library array will be in memory, and all data will be lost on browser refresh, which is okay.
- This exercise contains a few edge cases that have not been documented on purpose. You are encouraged to think about these edge cases and handle them.
- Commit your code to a public GitHub repository
- Try not to write Ninja Code
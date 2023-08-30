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


## Advanced Tasks 1
### Limit Number of Checkouts:
Each book can only be checked out a certain number of times. Add a property checkoutCount to each book and a constant MAX_CHECKOUTS (e.g., set to 3). When a book is checked out using checkoutBook(isbn), increment the count. If it exceeds MAX_CHECKOUTS, don’t allow the checkout and inform the user.
### Overdue Books:
Add a property dueDate to each book that gets set when a book is checked out. Create a function listOverdueBooks() that returns books that are past their due date.
### Book Rating System:
Allow users to rate books. Each book should have a rating property, which is an array of numbers. Create functions rateBook(isbn, rating) to add a rating (from 1 to 5) and getAverageRating(isbn) to calculate a book's average rating.
### Search Functionality:
Write a function searchBooks(query) where query is a string. The function should return books where the title or author matches (or partially matches) the query. Implement this search in a case-insensitive manner.
### Duplicate ISBN Check:
When adding a book to the library using addBookToLibrary(book), check if there's already a book with the same ISBN. If there is, do not add the book and inform the user about the duplicate.
### Sort Books:
Write a function sortLibrary(criteria) that sorts the library based on provided criteria (e.g., title, author, average rating). This will require an understanding of the array's sort method and comparator functions.
### Advanced Storage:
Instead of storing the state in memory (which gets cleared on a page refresh), you can introduce them to browser-based storage options like localStorage. This allows the library to persist across sessions. Create functions saveLibrary() to store the current state of the library in localStorage and loadLibrary() to retrieve it.

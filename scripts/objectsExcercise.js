function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${this.title} by ${this.author},  ${this.pages}, ${this.read}`;
    };
}

const hobbit = new Book("Hobbit", "J.R.R. Tolkien", "295 pages", "not read");
let myLibrary = [hobbit];

const bookForm = document.querySelector("#bookForm");
const addBtn = document.querySelector(".addBtn");
const formContainer = document.querySelector(".formContainer");
const addBook = document.querySelector(".addBook");

addBtn.addEventListener("click", () =>
    // bring out the form
    {
        formContainer.classList.remove("hide");
    }
);
addBook.addEventListener("click", () => {
    formContainer.classList.add("hide");
    // theres no validation if the button hides the form. find a work around
});

function createBookCard(book) {
    const shelf = document.querySelector(".shelf");
    const bookCard = document.createElement("div");
    const author = document.createElement("p");
    const title = document.createElement("p");
    const pages = document.createElement("p");

    author.textContent = "Author:";
    title.textContent = "Title:";
    pages.textContent = "Pages:";

    bookCard.classList.add("bookCard");
    author.classList.add("author");
    title.classList.add("title");
    pages.classList.add("pages");

    bookCard.appendChild(author);
    bookCard.appendChild(title);
    bookCard.appendChild(pages);
    shelf.appendChild(bookCard);

    author.textContent += ` ${book.author}`;
    title.textContent += ` ${book.title}`;
    pages.textContent += ` ${book.pages}`;
}

function displayBook(book) {
    createBookCard(book);
    // author = document.querySelector(".author");
    // title = document.querySelector(".title");
    // pages = document.querySelector(".pages");
    // author.textContent += ` ${book.author}`;
    // title.textContent += ` ${book.title}`;
    // pages.textContent += ` ${book.pages}`;
}

myLibrary.forEach(displayBook);

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // create a new formdata object

    const formData = new FormData(bookForm);
    const author = formData.get("author");
    const title = formData.get("bookTitle");
    const pages = formData.get("pages");
    console.log(author);

    bookForm.reset();
});
// add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

function addBookToLibrary() {
    // do stuff here
}

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

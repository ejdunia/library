function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    // this.read = read;
    this.info = function () {
        return `The ${this.title} by ${this.author},  ${this.pages}, ${this.pages}`;
    };
}
const hobbit = new Book("J.R.R. Tolkien", "Hobbit", "295 pages", "not read");

let myLibrary = [hobbit, hobbit];
myLibrary.forEach(createBookCard);

const bookForm = document.querySelector("#bookForm");
const addBookBtn = document.querySelector(".addBookBtn");
const formContainer = document.querySelector(".formContainer");
const addBook = document.querySelector(".addBook");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // create a new formdata object

    const formData = new FormData(bookForm);
    const author = formData.get("author");
    const title = formData.get("bookTitle");
    let bookId = title;
    const pages = formData.get("pages");
    bookId = new Book(...formData.values());
    addBookToLibrary(bookId);
    bookForm.reset();
    // console.log(bookId);
    // console.log(Object.fromEntries(formData));
    // console.log(...formData.values());
});

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
    createBookCard(book);
}

addBookBtn.addEventListener("click", () =>
    // bring out the form
    {
        formContainer.classList.remove("hiden");
    }
);
addBook.addEventListener("click", () => {
    formContainer.classList.add("hiden");
    // theres no validation if the button hides the form. find a work around
});

function createBookCard(book) {
    const shelf = document.querySelector(".shelf");
    const bookCard = document.createElement("div");
    const author = document.createElement("p");
    const title = document.createElement("p");
    const pages = document.createElement("p");
    const readBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    author.textContent = "Author:";
    title.textContent = "Title:";
    pages.textContent = "Pages:";
    readBtn.textContent = "Read";
    delBtn.textContent = "Delete";

    bookCard.classList.add("bookCard");
    author.classList.add("author");
    title.classList.add("title");
    pages.classList.add("pages");
    readBtn.classList.add("readBtn");
    delBtn.classList.add("delBtn");

    bookCard.appendChild(author);
    bookCard.appendChild(title);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(delBtn);
    shelf.appendChild(bookCard);

    author.textContent += ` ${book.author}`;
    title.textContent += ` ${book.title}`;
    pages.textContent += ` ${book.pages}`;

    bookCard.dataset.author = `${book.author}`;
    bookCard.dataset.index = myLibrary.length;

    delBtn.addEventListener("click", () => {
        // alert("sd");
        
    });

    console.log(bookCard.dataset.index);
}

// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  toggleRead(index) {
    this.books[index].toggleRead();
  }

  renderHTML() {
    let libraryBook = document.querySelector(".library");
    libraryBook.innerHTML = ""; // Clear previous content
    this.books.forEach((book, i) => {
      let bookElement = document.createElement("div");
      bookElement.classList.add("book");

      let titleLine = document.createElement("div");
      titleLine.classList.add("book-line");
      titleLine.innerHTML = `<h4>Title:</h4> ${book.title}`;
      bookElement.appendChild(titleLine);

      let authorLine = document.createElement("div");
      authorLine.classList.add("book-line");
      authorLine.innerHTML = `<h4>Author:</h4> ${book.author}`;
      bookElement.appendChild(authorLine);

      let pagesLine = document.createElement("div");
      pagesLine.classList.add("book-line");
      pagesLine.innerHTML = `<h4>Pages:</h4> ${book.pages}`;
      bookElement.appendChild(pagesLine);

      let readLine = document.createElement("div");
      readLine.classList.add("book-line");
      readLine.innerHTML = `<h4>Read?:</h4>`;
      let toggleReadBtn = document.createElement("button");
      toggleReadBtn.classList.add("toggle-read-btn");
      toggleReadBtn.textContent = book.read ? "Yes" : "Not Yet";
      toggleReadBtn.addEventListener("click", () => {
        this.toggleRead(i);
        this.renderHTML();
      });
      readLine.appendChild(toggleReadBtn);
      bookElement.appendChild(readLine);

      let removeBtnDiv = document.createElement("div");
      removeBtnDiv.classList.add("remove");
      let removeBtnImg = document.createElement("img");
      removeBtnImg.classList.add("remove-btn");
      removeBtnImg.src = "./images/remove.svg";
      removeBtnImg.height = 40;
      removeBtnImg.width = 40;
      removeBtnImg.addEventListener("click", () => {
        this.removeBook(i);
        this.renderHTML();
      });
      removeBtnDiv.appendChild(removeBtnImg);
      bookElement.appendChild(removeBtnDiv);

      libraryBook.appendChild(bookElement);
    });
  }
}

const library = new Library();

const addBtn = document.querySelector("#add-book");
const submitBtn = document.querySelector(".submit-btn");
const removeBtn = document.querySelector(".remove");
const title = document.querySelector(".title").value;
const author = document.querySelector(".author").value;
const pages = document.querySelector(".pages").value;
const read = document.querySelector(".read").checked;

addBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").checked;
    library.addBook(title, author, pages, read);
    library.renderHTML();
  });

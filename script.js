let myLibrary = [];

const addBtn = document.querySelector("#add-book");
const submitBtn = document.querySelector(".submit-btn");
const removeBtn = document.querySelector(".remove");
const title = document.querySelector(".title").value;
const author = document.querySelector(".author").value;
const pages = document.querySelector(".pages").value;
const read = document.querySelector(".read").checked;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  myLibrary.classList.add("read");
  renderHTML();
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  renderHTML();
}

function renderHTML() {
  let libraryBook = document.querySelector(".library");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `
    <div class="book">
    <div class="book-line"><h4>Title:</h4> ${book.title}</div>
    <div class="book-line"><h4>Author:</h4> ${book.author}</div>
    <div class="book-line"><h4>Pages:</h4> ${book.pages}</div>
    <div class="book-line"><h4>Read?:</h4>  <button class="toggle-read-btn" onclick="toggleRead(${i})">${
      book.read ? "Yes " : "Not Yet"
    }</button></div>
    <div class="remove">
      <img
        class="remove-btn"
        src="./images/remove.svg"
        height="40px"
        width="40px"
      onclick="removeBook(${i})"/>
    </div>
  </div>`;
    libraryBook.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  renderHTML();
}

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
    addBookToLibrary(title, author, pages, read);
  });

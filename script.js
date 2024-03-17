const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;

  this.info = function () {
    return (
      this.title + "by" + this.author + ", " + this.pages + "," + this.read
    );
  };
}

function addBookToLibrary() {}

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook() {
  myLibrary.forEach((col) => {
     const div = document.createElement("div");
     div.style.width = "150px";
     div.style.border = "1px solid black";
     div.style.margin = "10px";
     div.style.height = "250px";

     const title = document.createElement("p");
     const author = document.createElement("p");
     const pages = document.createElement("p");
     const read = document.createElement("p");

     title.textContent = col.title;
     author.textContent = col.author;
     pages.textContent = `${col.pages} pages`;
     read.textContent = `Is the book finished? ${col.read}`;

     selection.appendChild(div);
     div.appendChild(title);
     div.appendChild(author);
     div.appendChild(pages);
     div.appendChild(read);

  });
}

const selection = document.querySelector(".selection");


const submit = document.querySelector('.end');

submit.addEventListener('click', () => {
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  const pages = document.querySelector('input[name="pages"]').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBook();
});


// Dialog js practice
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addbook");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", () => {
  dialog.close(); 
});

closeButton.addEventListener("click", () => {
  dialog.close(); 
});


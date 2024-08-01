const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.id = id;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

let bookCounter = 0;

function displayBook() {


    for (let col of myLibrary) {
      if (myLibrary.indexOf(col) === bookCounter) {
        const div = document.createElement("div");
        div.classList.add("bookcard");
        div.style.border = "5px solid black";
        div.style.margin = "10px";
        div.style.boxShadow = "4px 5px 6px 0px rgba(0, 0, 0, 0.4)"


        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        const deleteBox = document.createElement("button");
        const readBox = document.createElement("button");


        deleteBox.textContent = "Delete";
        readBox.textContent = "Have you read?"


        if (col.read === 'yes') {
          readBox.style.backgroundColor = "green";
        } else {
          readBox.style.backgroundColor = "red";
        }

        readBox.addEventListener('click', () => {
          if (readBox.style.backgroundColor === "green") {
            readBox.style.backgroundColor = "red";
            col.read = 'no'} 
          else {
            readBox.style.backgroundColor = "green";
            col.read = 'yes'
          }
          });

          deleteBox.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(col), 1);
            div.remove();
            bookCounter = myLibrary.length;
          })


        title.textContent = `Title: ${col.title}`;
        author.textContent = `Author: ${col.author}`;
        pages.textContent = `Pages: ${col.pages}`;
        read.textContent = `Is the book finished? ${col.read}`;



        selection.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(deleteBox);
        div.appendChild(readBox);


        bookCounter++;
      } else continue;
    }

  // myLibrary.forEach((col) => {
  //    const div = document.createElement("div");
  //    div.style.width = "150px";
  //    div.style.border = "1px solid black";
  //    div.style.margin = "10px";
  //    div.style.height = "250px";

  //    const title = document.createElement("p");
  //    const author = document.createElement("p");
  //    const pages = document.createElement("p");
  //    const read = document.createElement("p");

  //    title.textContent = col.title;
  //    author.textContent = col.author;
  //    pages.textContent = `${col.pages} pages`;
  //    read.textContent = `Is the book finished? ${col.read}`;

  //    selection.appendChild(div);
  //    div.appendChild(title);
  //    div.appendChild(author);
  //    div.appendChild(pages);
  //    div.appendChild(read);

  //    arrayCounter++;

  // });
}

const selection = document.querySelector(".selection");


const submit = document.querySelector('.end');

submit.addEventListener('click', () => {  
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  const pages = document.querySelector('input[name="pages"]').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  // const newBook = new Book(title, author, pages, read,);

  if (title && author && pages && read !== null) {

    const newBook = new Book(title, author, pages, read,);
    addBookToLibrary(newBook);
    displayBook();
  }
});



// Dialog js practice
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addbook");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});


closeButton.addEventListener("click", () => {
  dialog.close(); 
});


let myLibrary = [];
const booksDiv = document.getElementById("books");
const newBookButton = document.getElementById("newBook");
const addBookForm = document.getElementById("addBook");
const cancelButton = document.getElementById("cancel");
const libraryTable = document.getElementById("library");

newBookButton.addEventListener("click", function () {
  addBookForm.style.display = "flex";
  newBookButton.style.display = "none";
});

cancelButton.addEventListener("click", function () {
  addBookForm.reset();
  addBookForm.style.display = "none";
  newBookButton.style.display = "block";
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function getBook() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let yesChecked = document.getElementById("yesRadio");
  if (yesChecked.checked) {
    read = "yes";
  } else {
    read = "no";
  }
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  addBookForm.reset();
  // createTable(myLibrary);

  publishRow(newBook);
}

function growLibrary(book) {
  myLibrary.push(book);
}

addBookForm.addEventListener("submit", function () {
  addBookForm.style.display = "none";
  newBookButton.style.display = "block";
  event.preventDefault();
  getBook();
});

function publishRow(book) {
  const title = book.title;
  const author = book.author;
  const pages = book.pages;
  const status = book.read;

  const newRow = document.createElement(`tr`);

  const cell1 = document.createElement(`td`);
  cell1.textContent = title;
  newRow.appendChild(cell1);

  const cell2 = document.createElement(`td`);
  cell2.textContent = author;
  newRow.appendChild(cell2);

  const cell3 = document.createElement(`td`);
  cell3.textContent = pages;
  newRow.appendChild(cell3);

  const cell4 = document.createElement(`td`);
  const readCheckBox = document.createElement(`input`);
  readCheckBox.setAttribute("type", "checkbox");
  readCheckBox.setAttribute("name", "status");
  if (status == `yes`) {
    readCheckBox.checked = true;
  } else if (status == `no`) {
    readCheckBox.checked = false;
  }
  cell4.appendChild(readCheckBox);
  newRow.appendChild(cell4);

  const cell5 = document.createElement(`td`);
  const rmButton = document.createElement(`button`);
  rmButton.textContent = `Remove`;
  cell5.appendChild(rmButton);
  newRow.appendChild(cell5);

  rmButton.addEventListener("click", function () {
    rmButton.closest("tr").remove();
  });

  libraryTable.appendChild(newRow);
}

// let book1 = new Book(`The Tuner`, `Korg`, `460`, `yes`);

// publishRow(book1);

// ******************************************************************************************
// Form validation assigment code below:

const title = document.getElementById(`title`);
const titleError = document.getElementById(`titleError`);

const author = document.getElementById(`author`);

const pages = document.getElementById(`pages`);
const pagesError = document.getElementById(`pagesError`);

title.addEventListener(`input`, (event) => {
  console.log(title.value);
  if (title.validity.tooShort) {
    titleError.textContent = `It's gotta have more than two characters`;
  } else {
    titleError.textContent = ``;
  }
});

pages.addEventListener(`input`, (event) => {
  console.log(
    `something has been entered into the pages input. Let's see what it is:`
  );
  let pagesValue = pages.valueAsNumber;
  console.log(pagesValue);

  // .value returns a string. .valueAsNumber will return a number

  // ******************************************************************************************************************************
  // I think the problem is the object type of pagesValue at this point. We need to first verify it's type before checking it's validity
  // but isn't that the friggen point of the validity check??

  console.log(Number(pagesValue));

  pagesValue = Number(pagesValue);

  // console.log(typeof Number(pagesValue))

  if (typeof pagesValue == `string`) {
    console.log(`found string`);
    pagesError.textContent = `Must input a number`;
  } else {
    pagesError.textContent = ``;
    console.log(`no pages error detected`);
  }

  // This does not work. Logs an empty string. What is different between this and the title input field?
  // if (pages.validity.typeMismatch) {
  //   console.log(`type mismatch error on pages input`);
  //   pagesError.textContent = `Must input a number`;
  // } else {
  //   pagesError.textContent = ``;
  //   console.log(`no pages error detected`);
  // }
});





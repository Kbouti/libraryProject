let myLibrary = [];

const booksDiv = document.getElementById("books");
const newBookButton = document.getElementById("newBook");
const addBookForm = document.getElementById("addBook");
const cancelButton = document.getElementById("cancel");
const libraryTable = document.getElementById("library");


newBookButton.addEventListener("click", function(){
    addBookForm.style.display = "flex";
    newBookButton.style.display = "none";
});

cancelButton.addEventListener("click", function(){
    addBookForm.reset();
    addBookForm.style.display = "none";
    newBookButton.style.display = "block";
})

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let yesChecked = document.getElementById('yesRadio');
    if (yesChecked.checked) {
        read = "yes";
    } else {
        read = "no" ;
    }
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    addBookForm.reset();
    // createTable(myLibrary);
    publishToLibrary(newBook);
}

addBookForm.addEventListener("submit", function(){
    addBookForm.style.display = "none";
    newBookButton.style.display = "block";
    event.preventDefault();
    addBook();
})

function capitalize(string){
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

function publishToLibrary(book){


    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const status = book.read;

    const newRow = document.createElement(`tr`);

    const cell1 = document.createElement(`td`);
    cell1.textContent = title
    newRow.appendChild(cell1);

    const cell2 = document.createElement(`td`);
    cell2.textContent = author
    newRow.appendChild(cell2);

    const cell3 = document.createElement(`td`);
    cell3.textContent = pages
    newRow.appendChild(cell3);

    const cell4 = document.createElement(`td`);

    const readCheckBox = document.createElement(`input`)
    readCheckBox.setAttribute('type', 'checkbox');
    readCheckBox.setAttribute('name', 'status');

    console.log(status)

    if (status == `yes`){
        readCheckBox.checked = true;
    }
    else if (status == `no`){
        readCheckBox.checked = false;
    }

    cell4.appendChild(readCheckBox);
    newRow.appendChild(cell4);


    const cell5 = document.createElement(`td`);
    const rmButton = document.createElement(`button`);
    rmButton.textContent = `Remove`;
    cell5.appendChild(rmButton);
    newRow.appendChild(cell5);
    



    libraryTable.appendChild(newRow);
} 


//let book1 = new Book(`The Tuner`, `Korg`, `460`, `yes`);


//publishToLibrary(book1);


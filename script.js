let myLibrary = [];

const booksDiv = document.getElementById("books");
const newBookButton = document.getElementById("newBook");
const addBookForm = document.getElementById("addBook");



newBookButton.addEventListener("click", function(){
    console.log("I shit me britges");
    addBookForm.style.display = "block";
    newBookButton.style.display = "none";
});


function Book (title, author, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(book){
    myLibrary.push(book)
}



let book1 = new Book(`The Bible`, `Jesus`, `no`);
let book2 = new Book(`The Lord of the Rings`, `J.R.R. Tolkein`, `no`);
let book3 = new Book(`Harry Potter`, `J.K. Rowling`, `yes`);




console.log(book1);
console.log(myLibrary);

addBook(book1);
console.log(myLibrary);

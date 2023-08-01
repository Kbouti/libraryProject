let myLibrary = [];

function Book (title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

let book1 = new Book(`The Bible`, `Jesus`, `no`);
let book2 = new Book(`The Lord of the Rings`, `J.R.R. Tolkein`, `no`);
let book3 = new Book(`Harry Potter`, `J.K. Rowling`, `yes`);




console.log(book1);
console.log(myLibrary);



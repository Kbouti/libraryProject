let myLibrary = [];

const booksDiv = document.getElementById("books");
const newBookButton = document.getElementById("newBook");
const addBookForm = document.getElementById("addBook");


newBookButton.addEventListener("click", function(){
    addBookForm.style.display = "block";
    newBookButton.style.display = "none";
});


function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(book){
    let title = document.querySelector('#title').value;
    console.log(`the title of this book is ${title}`);
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;

    let yesChecked = document.getElementById('yesRadio');
    if (yesChecked.checked) {
        console.log(`you read the book`);
        read = "yes";
    } else {
        console.log(`you didn't read the book`);
        read = "no" ;
    }


    let newBook = new Book(title, author, pages, read);
    console.log(newBook.title);

}

console.log(`hey man`)

addBookForm.addEventListener("submit", function(){
    addBookForm.style.display = "none";
    newBookButton.style.display = "block";
    event.preventDefault();
    addBook();
})




//   https://www.youtube.com/watch?v=9YGgC1WPpf4&t=880s













// let book1 = new Book(`The Bible`, `Jesus`, `no`);
// let book2 = new Book(`The Lord of the Rings`, `J.R.R. Tolkein`, `no`);
// let book3 = new Book(`Harry Potter`, `J.K. Rowling`, `yes`);

// console.log(book1);
// console.log(myLibrary);
// addBook(book1);
// console.log(myLibrary);

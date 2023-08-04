let myLibrary = [];

const booksDiv = document.getElementById("books");
const newBookButton = document.getElementById("newBook");
const addBookForm = document.getElementById("addBook");
const cancelButton = document.getElementById("cancel");


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



// The following code made with help of chatgpt makes a table, but I couldn't figure out how to get buttons in it.

// function createTable(array){
//     const table = document.createElement("table");

// const thead = document.createElement("thead");
// const tbody = document.createElement("tbody");

// const headerRow = document.createElement("tr");
// for (const key in array[0]) {
//   const th = document.createElement("th");
// let tempString = key;
// let capString = capitalize(tempString);
//   th.textContent = capString;
//   headerRow.appendChild(th);
// }
// thead.appendChild(headerRow);
// array.forEach((item) => {
//     const dataRow = document.createElement("tr");
//     for (const key in item) {
//       const td = document.createElement("td");
//       td.textContent = item[key];
//       dataRow.appendChild(td);
//     }
//     tbody.appendChild(dataRow);
//   });

//   table.appendChild(thead);
//   table.appendChild(tbody);

//   booksDiv.innerHTML = "";
//   booksDiv.appendChild(table);

// }

//   https://www.youtube.com/watch?v=9YGgC1WPpf4&t=880s




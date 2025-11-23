document.addEventListener("DOMContentLoaded", function(){
    displayBook();
});

const myLibrary = [];

function Book(name, author, genre) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.genre = genre
}

function addBookToLibrary(name, author, genre) {
    const newBook = new Book(name, author, genre);
    myLibrary.push(newBook);
}

function displayBook () {
    const container = document.querySelector('.book-container');
    container.innerHTML = "";
    myLibrary.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>Book name: ${item.name}</p>
            <p>Book author: ${item.author}</p>
            <p>Book gene :${item.genre}</p>
        `;
        container.appendChild(div);
    });
}

addBookToLibrary('GOT', 'nay', 'highschool');

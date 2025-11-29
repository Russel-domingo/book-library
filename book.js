

const addBtn = document.querySelector("#addBtn");

const myLibrary = [];

class Book {
    constructor (name, author, genre) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.container = document.querySelector('.book-container');
    }

    addBook(name, author, genre){
        const newBook = new Book(name, author, genre);
        this.books.push[newBook];
        this.displayBook();
    }

    removeBook(id){
        this.books = this.books.filter(book => book.id !== id);
        this.displayBook();
    }

    toggleRead(id){
        const book = this.books.find(book => book.id === id);
        if (book) {
            book.read = true;
            this.displayBook();
        }
    }

    displayBook() {
        this.container.innerHTML = "";

        this.books.forEach(book => {
            const div = document.createElement("div");
            div.className = "book-card";
            div.dataset.id = item.id;

            div.innerHTML = `
                <p>Book name: ${item.name}</p>
                <p>Book author: ${item.author}</p>
                <p>Book gene :${item.genre}</p>
            `;

            //read book
            const readBtn = document.createElement("button");
            readBtn.className = "read-btn";
            if(book.read === false) {
                readBtn.textContent = "Mark as read";
            } else {
                readBtn.textContent = "Read";
            }
            readBtn.addEventListener('click', this.toggleRead(book.id));

            //remove book
            const removeBtn = document.createElement("button");
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener('click', this.removeBook(book.id));

            div.appendChild(readBtn);
            div.appendChild(removeBtn);

            this.container.appendChild(div);
        });
    }
}

const library = new Library();

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const bookName = document.querySelector("#book-name").value;
    const bookAuthor = document.querySelector("#book-author").value;
    const bookGenre = document.querySelector("#book-genre").value;
    
    library.addBook(bookName, bookAuthor, bookGenre);
});

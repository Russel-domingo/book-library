

const addBtn = document.querySelector("#addBtn");

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
        div.className = "book-card";
        
        div.dataset.id = item.id;
        div.innerHTML = `
            <p>Book name: ${item.name}</p>
            <p>Book author: ${item.author}</p>
            <p>Book gene :${item.genre}</p>
        `;
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Remove Button";

        removeBtn.addEventListener("click", (e) => {
            const id = div.dataset.id;
            const index = myLibrary.findIndex(book => book.id === id);

            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBook();
            }
        });

        div.appendChild(removeBtn);
        container.appendChild(div);
    });

}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const bookName = document.querySelector("#book-name").value;
    const bookAuthor = document.querySelector("#book-author").value;
    const bookGenre = document.querySelector("#book-genre").value;
    
    addBookToLibrary(bookName, bookAuthor, bookGenre);
    displayBook();
})

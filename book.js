

const addBtn = document.querySelector("#addBtn");

const myLibrary = [];

function Book(name, author, genre) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.read = false;
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
        // read status
        const readBtn = document.createElement("button");
        if (item.read === false) {
            
            readBtn.textContent = "Mark as read";
        } else {
            readBtn.textContent = "Read";
        }
        
        readBtn.className ="read-btn";

        readBtn.addEventListener("click", () => {
            div.style.background = "green";
            item.read = true;
            readBtn.textContent = "Read"
        })


        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";
        removeBtn.className = "remove-btn";

        removeBtn.addEventListener("click", (e) => {
            const id = div.dataset.id;
            const index = myLibrary.findIndex(book => book.id === id);

            if (index !== -1) {
                myLibrary.splice(index, 1);
                displayBook();
            }
        });

        div.appendChild(removeBtn);
        div.appendChild(readBtn);
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

const form = document.getElementById("addBook");
const tableData = document.getElementById("tableData");

let Books = [];

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const date = form.elements['date'].value;

    const Book = {
        title: title,
        author: author,
        date: date
    }
    Books.push(Book);
    console.log(Book);
    form.reset();

    updateTable();
});

function deleteBook(index) {
    Books.splice(index, 1);
    updateTable();
}

function updateTable() {
    tableData.innerHTML = '';

    Books.forEach(function(book, index) {
        const id = index + 1;
        
        tableData.innerHTML += `
            <tr> <th scope="row">${id}</th>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.date}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Edit</button>
                        <button type="button" class="btn btn-sm btn-danger" onclick="deleteBook(${index})">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
}
const form = document.getElementById("addMember");
const tableData = document.getElementById("tableData");

let Members = [];

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const name = form.elements['member-name'].value;
    const address = form.elements['member-address'].value;
    const contact = form.elements['member-contact'].value;
    const gender = form.elements['gender'].value;
    const date = form.elements['release-date'].value;

    const Member = {
        name: name,
        address: address,
        contact: contact,
        gender: gender,
        date: date
    }
    Members.push(Member);
    console.log(Member);
    form.reset();

    updateTable();
});

function deleteBook(index) {
    Members.splice(index, 1);
    updateTable();
}

function updateTable() {
    tableData.innerHTML = '';

    Members.forEach(function(member, index) {
        const id = index + 1;
        
        tableData.innerHTML += `
            <tr>
                <th scope="row">${id}</th>
                <td>${member.name}</td>
                <td>${member.address}</td>
                <td>${member.contact}</td>
                <td>${member.gender}</td>
                <td>${member.date}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addMember">Edit</button>
                        <button type="button" class="btn btn-sm btn-danger" onclick="deleteBook(${index})">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
}
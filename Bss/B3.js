avaScript

const employees = [
    { id: 1, name: "John", department: "IT", salary: 50000 },
    { id: 2, name: "Sarah", department: "HR", salary: 45000 },
    { id: 3, name: "Michael", department: "Finance", salary: 60000 },
    { id: 4, name: "Emma", department: "IT", salary: 55000 },
    { id: 5, name: "David", department: "Sales", salary: 48000 },
    { id: 6, name: "James", department: "Marketing", salary: 52000 },
    { id: 7, name: "Sophia", department: "HR", salary: 47000 },
    { id: 8, name: "Daniel", department: "Finance", salary: 62000 },
    { id: 9, name: "Olivia", department: "Sales", salary: 51000 },
    { id: 10, name: "Noah", department: "IT", salary: 57000 },
    { id: 11, name: "Liam", department: "Marketing", salary: 53000 },
    { id: 12, name: "Ava", department: "Finance", salary: 65000 }
];

let filteredData = [...employees];

let currentPage = 1;
const rowsPerPage = 10;

let sortDirection = true;

// =======================
// DISPLAY TABLE
// =======================
function renderTable() {

    const tableBody =
        document.getElementById("tableBody");

    tableBody.innerHTML = "";

    const start =
        (currentPage - 1) * rowsPerPage;

    const end = start + rowsPerPage;

    const pageData =
        filteredData.slice(start, end);

    pageData.forEach(employee => {

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${employee.id}</td>

            <td contenteditable="true"
                onblur="updateValue(${employee.id}, 'name', this.innerText)">
                ${employee.name}
            </td>

            <td contenteditable="true"
                onblur="updateValue(${employee.id}, 'department', this.innerText)">
                ${employee.department}
            </td>

            <td contenteditable="true"
                onblur="updateValue(${employee.id}, 'salary', this.innerText)">
                ${employee.salary}
            </td>

            <td>
                Inline Edit Enabled
            </td>
        `;

        tableBody.appendChild(row);
    });

    updatePageInfo();
}

// =======================
// SEARCH FILTER
// =======================
document
.getElementById("search")
.addEventListener("input", function () {

    const value =
        this.value.toLowerCase();

    filteredData = employees.filter(
        employee =>
            employee.name
            .toLowerCase()
            .includes(value) ||

            employee.department
            .toLowerCase()
            .includes(value)
    );

    currentPage = 1;

    renderTable();
});

// =======================
// SORTING
// =======================
function sortTable(column) {

    filteredData.sort((a, b) => {

        if (a[column] < b[column])
            return sortDirection ? -1 : 1;

        if (a[column] > b[column])
            return sortDirection ? 1 : -1;

        return 0;
    });

    sortDirection = !sortDirection;

    renderTable();
}

// =======================
// INLINE EDIT
// =======================
function updateValue(id, field, value) {

    const employee =
        employees.find(
            emp => emp.id === id
        );

    employee[field] = value;
}

// =======================
// PAGINATION
// =======================
function nextPage() {

    const totalPages =
        Math.ceil(
            filteredData.length /
            rowsPerPage
        );

    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

function prevPage() {

    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

function updatePageInfo() {

    const totalPages =
        Math.ceil(
            filteredData.length /
            rowsPerPage
        );

    document.getElementById(
        "pageInfo"
    ).textContent =
        `Page ${currentPage} of ${totalPages}`;
}

renderTable();
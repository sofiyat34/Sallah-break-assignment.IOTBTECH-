
JavaScript

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addCard() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    if (!title) {
        alert("Title is required");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        description,
        priority,
        dueDate,
        status: "todo"
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function deleteCard(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function editCard(id) {
    const task = tasks.find(task => task.id === id);

    const newTitle = prompt("Edit Title", task.title);
    if (newTitle === null) return;

    const newDescription = prompt(
        "Edit Description",
        task.description
    );

    task.title = newTitle;
    task.description = newDescription;

    saveTasks();
    renderTasks();
}

function renderTasks() {
    document.getElementById("todo").innerHTML = "";
    document.getElementById("progress").innerHTML = "";
    document.getElementById("done").innerHTML = "";

    tasks.forEach(task => {
        const card = document.createElement("div");

        card.className =
            `card ${task.priority.toLowerCase()}`;

        card.draggable = true;
        card.dataset.id = task.id;

        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>
            <p><strong>Due:</strong> ${task.dueDate}</p>

            <button onclick="editCard(${task.id})">
                Edit
            </button>

            <button onclick="deleteCard(${task.id})">
                Delete
            </button>
        `;

        card.addEventListener("dragstart", dragStart);
        card.addEventListener("dragend", dragEnd);

        document
            .getElementById(task.status)
            .appendChild(card);
    });
}

function dragStart(e) {
    e.dataTransfer.setData(
        "text/plain",
        e.target.dataset.id
    );

    e.target.classList.add("dragging");
}

function dragEnd(e) {
    e.target.classList.remove("dragging");
}

const columns = document.querySelectorAll(".task-list");

columns.forEach(column => {

    column.addEventListener("dragover", e => {
        e.preventDefault();
        column.classList.add("drop-zone");
    });

    column.addEventListener("dragleave", () => {
        column.classList.remove("drop-zone");
    });

    column.addEventListener("drop", e => {

        e.preventDefault();

        column.classList.remove("drop-zone");

        const id = Number(
            e.dataTransfer.getData("text/plain")
        );

        const task = tasks.find(
            task => task.id === id
        );

        task.status = column.id;

        saveTasks();
        renderTasks();
    });

});

renderTasks();

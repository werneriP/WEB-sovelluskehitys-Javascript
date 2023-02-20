var x = document.getElementById("nappi");
x.addEventListener("click", addTask);

function addTask() {
    const inputTask = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    const taskText = document.createTextNode(inputTask.value);
    taskItem.appendChild(document.createTextNode(inputTask.value));
    taskList.appendChild(taskItem);

    // Add a edit button to the list item
    const editButton = document.createElement("button");
    editButton.innerHTML = "E";
    editButton.onclick = function () {
        const newTaskText = prompt("Anna uusi teksti....", taskText.nodeValue);
        console.log("uus teksti " + newTaskText);
        if (newTaskText !== null && newTaskText !== "") {
            // taskText.nodeValue = newTaskText;
            taskItem.setAttribute('taskText', 'newTaskText');
        };
    };
    taskItem.appendChild(editButton);

    // Add a delete button to the list item
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteButton);
    //   console.log(taskItem, taskList);
    taskList.appendChild(taskItem);
    inputTask.value = "";
}


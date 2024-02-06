const addToButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("ToDoContainer");
const inputField = document.getElementById("inputField");

addToButton.addEventListener("click", () => {
    let paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    if (!paragraph.innerText) {
        alert("Введите текст");
    }
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", () => {
        toDoContainer.removeChild(paragraph);
    });
});

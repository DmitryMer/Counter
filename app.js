const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("increase")) {
            count++;
            counter.innerHTML = count;
        } else if (btn.classList.contains("decrease")) {
            count--;
            counter.innerHTML = count;
        } else {
            count = 0;
            counter.innerHTML = 0;
        }

        if (count > 0) {
            counter.style.color = "green";
        } else if (count == 0) {
            counter.style.color = "gray";
        } else {
            counter.style.color = "red";
        }
    });
});

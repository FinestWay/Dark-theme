const btn = document.querySelector("#btn");
const div = document.querySelector("#div")
div.innerHTML = 1;

btn.addEventListener("click", () => {
    div.innerHTML = div.innerHTML++;
})
let icon = document.querySelector("#moon-icon");
icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.svg"
    }
    else{
        icon.classList.add("toggle");
        icon.src = "images/moon.svg"
    }
});
let typed = new Typed(".auto-type", {
    strings: ["Programmer", "Coder", "Designer"],
    typeSpeed: 140,
    backSpeed: 140,
    loop: true
})
console.log(typed);
let link = document.querySelector(".links");
let list = document.querySelector("ul")
link.addEventListener("click", () => {
    if (list.style.display === "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
})
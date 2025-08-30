const glass = document.querySelector("i");
const images = document.querySelectorAll(".card img");
glass.addEventListener("click", ()=>{
images.forEach(image => {
    image.classList.toggle("wide");
});
})
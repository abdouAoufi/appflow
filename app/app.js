const button = document.getElementById("myButton");
const image = document.getElementById("myImage");

button.addEventListener("click", test);

function test() {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}
const button = document.getElementById("myButton");
const image = document.getElementById("myImage");

button.addEventListener("click", test);

function test() {
    if (image.style.display === "n   one") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}
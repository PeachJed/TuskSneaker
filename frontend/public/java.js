// ช่อง Input name shoe
// get a reference to the search button and input element
var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchInput");

// create an array of shoe names
var shoeNames = ["Codex", "Prism", "Nemo", "Lumos", "Aura", "Pixel", "Apex", "Anima", "Hope", "Intra", "Impulse", "Care", "Echo", "Helix", "Neo", "Logic"];

// add a click event listener to the search button
searchButton.addEventListener("click", function () {

    // get the value of the search input
    var searchValue = searchInput.value;

    // check if the search value is in the shoe names array
    if (shoeNames.includes(searchValue)) {

        // redirect to the shoe name html
        window.location.href = searchValue + ".html";
    } else {
        // show an error message
        alert("Shoes not found");
    }
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

var input = document.getElementById("myInput");
input.addEventListener("change", function () {
    if (this.value <= 0) {
        alert("Negative numbers are not allowed");
        this.value = 1;
    }
});


var select = document.getElementById("size-select");
select.addEventListener("change", function () {
    var selectedValue = select.value;
    var input = document.getElementById("myInput");
    if (input.value === input.defaultValue) {
        input.value = selectedValue;
    }
});
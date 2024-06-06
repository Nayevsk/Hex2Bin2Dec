// Access the element with id "header"
var headerElement = document.getElementById("header");

// Log the element to the console
console.log(headerElement);

// Change the text content of the header element
headerElement.textContent = "Hello!";

// Access the button element
var buttonElement = document.getElementById("changeTextButton");

// Add an event listener to the button to change the header text on click
buttonElement.addEventListener("click", function() {
    headerElement.textContent = "Text changed by button click!";
});
// DOM Selectors to easily access HTML elements
const DOMSelectors = {
  parentdiv: document.querySelector(".parent"), // The container for the cards
  submitButton: document.querySelector("#sigmabutton"), // The submit button
  title: document.querySelector("#title"), // Input for the title
  description: document.querySelector("#description"), // Input for the description
  ImageURL: document.querySelector("#ImageURL"), // Input for the image URL
};

// Function to clear input fields after submission
function clearInput() {
  DOMSelectors.title.value = ""; // Clear the title input
  DOMSelectors.description.value = ""; // Clear the description input
  DOMSelectors.ImageURL.value = ""; // Clear the image URL input
}

// Function to create and add a new card element
function addElement(num) {
  // Create a new div element for the card
  const card = document.createElement("div");
  card.className = "card"; // Set the class for styling
  card.id = `p${num}`; // Unique ID for the card

  // Set the inner HTML of the card
  card.innerHTML = `
    <h4>${DOMSelectors.title.value}</h4> <!-- Title -->
    <p>${DOMSelectors.description.value}</p> <!-- Description -->
    <img src="${DOMSelectors.ImageURL.value}" alt="Card Image" /> <!-- Image -->
    <button id="b${num}">Delete</button> <!-- Delete button -->
  `;

  // Append the card to the parent div
  DOMSelectors.parentdiv.appendChild(card);

  // Add event listener for the delete button
  document
    .querySelector(`#b${num}`) // Select the delete button by its unique ID
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default action (if any)
      card.remove(); // Remove the card from the DOM
    });
}

// Main function to run the application
function run() {
  let n = 0; // Initialize a counter for card numbers
  DOMSelectors.submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    console.log("sigma"); // Log to console (for debugging)
    addElement(n); // Call function to add a new card
    clearInput(); // Clear input fields after adding the card
    n += 1; // Increment the card number for the next card
  });
}

// Execute the main function
run();

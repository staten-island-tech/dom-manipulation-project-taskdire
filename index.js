const DOMSelectors = {
  parentdiv: document.querySelector(".parent"),
  submitButton: document.querySelector("#sigmabutton"),
  title: document.querySelector("#title"),
  desc: document.querySelector("#desc"),
};

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.desc.value = "";
}

function addElement(num) {
  // Create a new div element
  const card = document.createElement("div");
  card.className = "card";
  card.id = `p${num}`;

  // Set the inner HTML
  card.innerHTML = `
    <h4>${DOMSelectors.title.value}</h4>
    <img src="${DOMSelectors.desc.value}" alt="Card Image" />
    <button id="b${num}">Delete</button>
  `;

  // Append the card to the parent div
  DOMSelectors.parentdiv.appendChild(card);

  // Add event listener for the delete button
  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      card.remove(); // Use the card variable to remove it
    });
}

function run() {
  let n = 0;
  DOMSelectors.submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("sigma");
    addElement(n);
    clearInput();
    n += 1;
  });
}

run();

const DOMSelectors = {
  parentdiv: document.querySelector(".parent"),
  submitButton: document.querySelector("#sigmabutton"),
  title: document.querySelector("#title"),
  description: document.querySelector("#description"),
  ImageURL: document.querySelector("#ImageURL"),
};

function clearInput() {
  DOMSelectors.title.value = "";
  DOMSelectors.description.value = "";
  DOMSelectors.ImageURL.value = "";
}

function addElement(num) {
  const card = document.createElement("div");
  card.className = "card";
  card.id = `p${num}`;

  card.innerHTML = `
    <h4>${DOMSelectors.title.value}</h4>
    <p>${DOMSelectors.description.value}</p>
    <img src="${DOMSelectors.ImageURL.value}" alt="Card Image" />
    <button id="b${num}">Delete</button>
  `;

  DOMSelectors.parentdiv.appendChild(card);

  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      card.remove();
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

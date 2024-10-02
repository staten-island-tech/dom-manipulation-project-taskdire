const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
};
const studnet = {
  name: "Mark",
};
console.log(DOMSelectors.items);

function changecolor() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event.target);
  });
}
changecolor();

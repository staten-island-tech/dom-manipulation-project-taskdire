const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  image: document.getElementById("cardIMG"),
  card: document.getElementById("Card"),
  Desc: document.getElementById("Desc"),
};

function Form() {
  let form = document.querySelector("form");

  form.addEventListener("enter", function (event) {
    event.preventDefault();

    console.log(event.target);
  });
}

form();

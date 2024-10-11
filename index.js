const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container"),
  image: document.getElementById("image"), // Image URL input
  title: document.getElementById("card"), // Title input
  desc: document.getElementById("Desc"), // Description input
};

console.log(DOMSelectors.desc);

DOMSelectors.button.addEventListener("click", function () {
  let image = DOMSelectors.image.value;
  let title = DOMSelectors.title.value;
  let desc = DOMSelectors.desc.value;

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend", // Use "beforeend" to append to the end of the container
    `<div class="card">  
      <h3>${title}</h3> 
      <img src="${image}" alt="image" class="image">
      <p>${desc}</p>
    </div>`
  );

  // Clear input fields
  DOMSelectors.image.value = ""; // Clear image input
  DOMSelectors.title.value = ""; // Clear title input
  DOMSelectors.desc.value = ""; // Clear description input
});

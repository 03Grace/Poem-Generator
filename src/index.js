function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The AI Poem Generator",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".input");
  let apiKey = "o031ff44025aa0btaa12d97420a0a3c6";
  let context =
    "You are a romantic Poem expert and love to write short poems. Generate a 4 line poem. Please, separate each line (each of the four lines on a new line. Do not combine the lines). seperate each line in basic HTML style using </br>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning. Do not include any title or say anything about the poem before beginning";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);

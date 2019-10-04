var yourAPIKey = "AZosHhV0SEaGoklzJCJJsz";

// Set up the picker
const client = filestack.init(yourAPIKey);
const options = {
  onUploadDone: updateForm,
  maxSize: 10 * 1024 * 1024,
  accept: "image/*",
  uploadInBackground: false
};
const picker = client.picker(options);

// Get references to the DOM elements

const form = document.getElementById("pick-form");
const fileInput = document.getElementById("fileupload");
const btn = document.getElementById("picker");
const nameBox = document.getElementById("nameBox");
const urlBox = document.getElementById("urlBox");

// Add our event listeners

btn.addEventListener("click", function(e) {
  e.preventDefault();
  picker.open();
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Submitting: " + fileInput.value);
});

// Helper to overwrite the field input value

function updateForm(result) {
  const fileData = result.filesUploaded[0];
  fileInput.value = fileData.url;

  // Some ugly DOM code to show some data.
  const name = document.createTextNode("Selected: " + fileData.filename);
  const url = document.createElement("a");
  url.href = fileData.url;
  url.appendChild(document.createTextNode(fileData.url));
  nameBox.appendChild(name);
  urlBox.appendChild(document.createTextNode("Uploaded to: "));
  urlBox.appendChild(url);
}

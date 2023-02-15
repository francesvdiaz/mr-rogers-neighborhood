
function() {

}

function handleFormSubmission (event) {
  event.preventDefault();
  
};

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 


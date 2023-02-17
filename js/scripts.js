
function changeNumber(number) {
  number = document.getElementById("input").value;
  let result = [];

    for (i=0;i<=number;i++) {
      result.push(i);
  };
  return result;
}


function handleFormSubmission (event) {
  event.preventDefault();
  number = document.getElementById("input").value;
  robogerArray = changeNumber(number);
  const output = document.createElement("p")
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.setAttribute("id","output")
  body.append(div);
  div.append(output);
  output.innerText = robogerArray;
};

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 


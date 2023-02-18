
function countNumbers(number) {
  number = document.getElementById("input").value;
  let result = [];

    for (i=0;i<=number;i++) {
      result.push(i);
  };
  return result;
}

function changeWord(number) {
  const result = [];
  for (let i=0;i<number.length;i++) {
    if (number[i] === 1) {
      result.push("beep!");
    } else {
      result.push(number[i]);
    }
  }
    return result;
}


function handleFormSubmission (event) {
  event.preventDefault();
  number = document.getElementById("input").value;
  robogerArray = countNumbers(number);
  const beepArray = changeWord(robogerArray);
  const output = document.createElement("p")
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.setAttribute("id","output")
  body.append(div);
  div.append(output);
  output.innerText = beepArray;
};

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 


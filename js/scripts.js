
function countNumbers(number) {
  number = document.getElementById("input").value;
  let result = [];

    for (i=0;i<=number;i++) {
      result.push(i);
  };
  return result;
};

function changeWord(number) {
  const result = [];
  for (let i=0;i<number.length;i++) {
    const input = number[i].toString();
    let newString = "";

    for (let s=0;s<input.length;s++) {
      if (input.includes("3")) {
        newString = "won't you be my neighbor?";
      } else if (input.includes("2")) {
        newString = "boop!";
      } else if (input.includes("1")){
        newString = "beep!";
      } else {
        newString = input;
      }
    }
    result.push(newString);
  }
    return result;
};

function reverseArray (number) {
  number = document.getElementById("input").value;
  let result = [];
  
    for (i=0;i<=number;i--) {
      result.unshift(i);
};
  return results;
};

function handleFormSubmission (event) {
  event.preventDefault();
  number = document.getElementById("input").value;
  robogerArray = countNumbers(number);
  let beepArray = changeWord(robogerArray.reverse());
  const output = document.createElement("p")
  const body = document.querySelector("body");
  const div = document.getElementById("output");
  div.append(output);
  output.innerText = beepArray.join(", ");;
};

window.addEventListener("load", function() {
  this.document.getElementById("reverseButton").addEventListener("click",handleFormSubmission);
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 


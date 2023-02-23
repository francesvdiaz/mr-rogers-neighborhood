
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
      } else if (input.includes("1")) {
        newString = "beep!";
      } else {
        newString = input;
      }
    }
    result.push(newString);
  };
    return result;
};

function handleFormSubmission (event) {
  event.preventDefault();
  number = document.getElementById("input").value;
  const div = document.getElementById("output");
  div.innerText = "";
  robogerArray = countNumbers(number);
  let beepArray = changeWord(robogerArray);
  const output = document.createElement("p")
  div.append(output);
  output.style.backgroundColor = "#d1c8e8";
  output.innerText = beepArray.join(", ");
};
  
window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 


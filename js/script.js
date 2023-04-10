var yourName = document.querySelector("#yName");
var partnerName = document.querySelector("#pName");
var submit = document.getElementById("submit");
var text = document.getElementById("inner_text");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (yourName.value.trim() == "" || partnerName.value.trim() == "") {
    text.innerHTML = "Form can't be empty";

    text.style.background = "red";
  } else {
    var number = Math.floor(Math.random() * 100) + 1;

    text.innerHTML = `${yourName.value} and ${partnerName.value} love percentage is ${number}%`;
    text.style.background = "green";
  }
});

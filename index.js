"use-strict";

const reserveBtn = document.querySelectorAll("#reserveBtn");
reserveBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.textContent = "Reserved!";
  });
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  const nameID = document.getElementById("nameID");
  const nameValue = nameID.value;
  console.log(nameValue);
  nameID.style.borderBottom = "";

  const emailID = document.getElementById("emailID");
  const emailValue = emailID.value;
  console.log(emailValue);
  emailID.style.borderBottom = "";

  const textareaID = document.getElementById("textareaID");
  const textareaValue = textareaID.value;
  console.log(textareaValue);
  textareaID.style.borderBottom = "";

  if (nameValue === "") {
    nameID.style.borderBottom = "2px solid red";
    nameID.placeholder = "Please enter your name";
    nameID.classList.add("red-placeholder");
    nameID.focus();
  } else if (emailValue === "") {
    emailID.style.borderBottom = "2px solid red";
    emailID.placeholder = "Please enter your email";
    emailID.classList.add("red-placeholder");
    emailID.focus();
  } else if (!emailValue.includes("@" && ".")) {
    emailID.style.borderBottom = "2px solid red";
    emailID.placeholder = "Please enter a valid email";
    emailID.classList.add("red-placeholder");
    emailID.focus();
  } else if (textareaValue === "") {
    textareaID.style.borderBottom = "2px solid red";
    textareaID.placeholder = "Please enter some text";
    textareaID.classList.add("red-placeholder");
    textareaID.focus();
  } else {
    submitBtn.innerText = "Sending...";
    setTimeout(function () {
      submitBtn.innerText = "Form submitted!";
    }, 5000);
  }
});

/*
    let yourName = document.querySelector('.profile');
    var name = localStorage.getItem("useName");

    if(useName) {
        yourName.innerText = `${inputText}`;
    }
    */

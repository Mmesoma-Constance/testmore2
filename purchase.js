function purchase() {
  const priceBtn = document.querySelector(".priceBtn");
  const therapistName = priceBtn.dataset.name;

  /* sessionStorage.setItem("therapistName", therapistName);
  console.log(therapistName);

  const therapist = sessionStorage.getItem("therapistName");*/

  document.getElementById("therapistName").innerHTML = therapistName;
}

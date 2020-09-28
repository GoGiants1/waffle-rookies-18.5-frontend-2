const number = document.getElementById("number");

const increases = document.getElementsByClassName("increase");

const decrease = document.getElementById("decrease");

increases.onclick.forEach(increse => {
  
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
});





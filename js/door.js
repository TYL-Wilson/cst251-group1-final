var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

//var element = document.querySelector(".door2");
//element.addEventListener("click", toggleDoor);

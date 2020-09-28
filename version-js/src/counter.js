var number = document.getElementById("number");

const increases = document.getElementsByClassName("increase");
var listNum = document.getElementsByClassName("increase").length;

var btns = document.getElementsByClassName("increase");



var count = 0;
for(var i=0; i < (btns = document.getElementsByClassName("increase")).length;  i++){
  btns[i].onclick = function(){
  
  count++;
  number.innerHTML = count;

  } 
}




// for (var i = 0; i < listNum; i++) {
//   btns = document.getElementsByClassName("increase");
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     listNum = document.getElementsByClassName("increase").length;
//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }else{
//       number = current.length;
//     }

//     console.log(btns.length)
//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }


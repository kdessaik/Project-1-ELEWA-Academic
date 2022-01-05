
/*slide bar */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";

}


/* on click buttons */
function Form1Course(){
  window.location.href='Static/pages/Form1.html';
}
function Form2Course(){
  window.location.href='Static/pages/Form2.html';
}
function Form3Course(){
  window.location.href='Static/pages/Form3.html';
}
function Form4Course(){
  window.location.href='Static/pages/Form4.html';
}
function FormDCourse(){
  window.location.href='Static/pages/Dictionary.html';
}
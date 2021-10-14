//Checking devices
window.desktopcheck = function() {
   var check = false;
   if (window.innerWidth > 800) {
      check = true;
      document.body.style.display = "none";
   }
   return check;
}

if (window.desktopcheck()) {
   alert('This webpage has not yet available on laptop and desktop or higher than 800 pixel width!');
}
//Body to make fit in screen
window.onresize = fitScreen();
function fitScreen(){
   document.body.style.height = window.innerHeight + "px";
}
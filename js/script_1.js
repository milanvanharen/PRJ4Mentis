// When the user scrolls down 20px from the top of the document, make the background of the nav bar dark.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "#343a40";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}
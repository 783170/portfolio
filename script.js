window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header-text").style.fontSize = "2vw";
    document.getElementById("header-banner-container").style.height = "5vw";
    //document.getElementById("navbar").style.top = "5vw";
    document.getElementById("banner").style.opacity = "0";
  } else {
    document.getElementById("header-text").style.fontSize = "5vw";
    document.getElementById("header-banner-container").style.height = "14vw";
    //document.getElementById("navbar").style.top = "14vw";
    document.getElementById("banner").style.opacity = "0.4";
  }
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var type = new Typed('.typing-text', {
  strings: ['an Aspiring IT Engineer', 'a passionate programmer'],
  typeSpeed: 120,
  loop: true
});

$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
  });
  
  //smooth scroll
  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      1000, 
      'linear'
    );

  });
});

AOS.init({
  duration: 1000,
  once: true,
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("anim");
    }
    else {
      reveals[i].classList.remove("anim");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();
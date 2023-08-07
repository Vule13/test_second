$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('header').addClass('sticky');
    }
    else{
      $('header').removeClass('sticky');
    }
  });
});
$(document).ready(function(){
  $('.header-taskbar').click(function(){
    $('ul').toggleClass('show')
    // $('.icon-btn').toggleClass('show')
  });
});
// window.addEventListener("scroll", function(){
//   var header = this.document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0)
// })
$(document).ready(function(){
  $('.blog__icon-tab').click(function(){
    $('.sidebar--js').toggleClass('bar')
  });
});
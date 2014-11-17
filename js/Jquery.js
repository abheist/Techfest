var main = function() {
 
 
	  $('.icon-follow').click(function() {
    $('.follow').animate({
      right: "0px"
    }, 200);

    $('body').animate({
      right: "200px"
    }, 200);
  });

  

	  $('.icon-close').click(function() {
    $('.follow').animate({
      right: "-200px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
};


$(document).ready(main);

// Page Loader
$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
    }, 500);
});

// Navigation ACTIVE class
$(document).ready(function(){
	$('.navbar li a[href="' + document.location.pathname + '"]').parent('li').addClass('active');
});

// We put modals out of wrapper to working properly
$(document).ready(function(){
	$('.modal').appendTo("body");
});

// Tooltips and Popovers
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  $('[rel="tooltip"]').tooltip();
});

// Header switch class        
$(function() {
    var navbar = $("#mainNav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            navbar.removeClass('bg-transparent').addClass("pri-sec-gradient");
            //navbar.removeClass('navbar-dark').addClass("navbar-light");
        } else {
            navbar.removeClass("pri-sec-gradient").addClass('bg-transparent');
            //navbar.removeClass("navbar-light").addClass('navbar-dark');
        }
    });
});  

// Product Rotate
(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:1500, pauseSpeed:1000});
 });
$(document).ready(function() {
	mobile();
	cryptoCarousel();
	effect();
	form();
});

$(window).on("scroll", function(){
	form();
});

$(window).on("resize", function(){
	mobile();
	cryptoCarouselNav();
	form();
});


//Mobile
var mobile = function(){
	if (window.matchMedia('(max-width: 767px)').matches) {
		$("body").addClass('mobile');
		$(".body-wrapper").removeClass('fixed');

	}else{
		$("body").removeClass('mobile');
	}
}

//cryptoCarousel Carousel
var cryptoCarousel = function(){
	$('.crypto-carousel').owlCarousel({
	    loop:false,
	    margin:10,
	    items:7,
	    nav:true,
	    dots:true,
	    navText:[""],
	    navSpeed:600,
	    dragEndSpeed:600,
	    autoHeight:true,
	    responsiveRefreshRate:0,
	    responsive:{
	        0:{
	            items:1,
	            dots:false
	        },
	    	575:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:4
	        },
	        1200:{
        		items:5
	        }
	    }
	});
	cryptoCarouselNav();
}
//cryptoCarousel Carousel
var cryptoCarouselNav = function(){
	$(".owl-next").css({
		marginLeft: $(".owl-dots").children('.owl-dot').length * 22.5
	});
}

/*-> Parallax effect */
var parallax = function(){
  scTop =  $(window).scrollTop();
  wH = $(window).height(); 
	$(".parallax-top").each(function() {
	    $(this).css("top","0");
	    var parallaxVal = $(this).attr("data-parallax");
	    var parPosTop = $(this).offset().top;
	    var wHeightVal = parPosTop - wH 
	    var vars =  wHeightVal - scTop
	    if( wHeightVal < scTop) {
	    	$(this).css("top", vars / parallaxVal );
	    }
	    else{
	    	$(this).css("top", vars / parallaxVal );
	    }
	}); 
}

//effect JS
var effect = function(){
	wow = new WOW(
		{
			boxClass:     'eff',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       true,       // default
			live:         true        // default
		}
	)
	wow.init();

	$(".clickform").on("click", function(){
		if (!window.matchMedia('(max-width: 991px)').matches) {
			$("body").prepend("<div class='down-animate fadeIn animated' title='Kapat'><span class='slideInDownRep animated'></span></div>");
		}else{
			wh = $(window).height();;
			ofTop = $(".form-wrapper").offset().top;
			ofHeight = $(".form-wrapper").outerHeight();
			val = wh - ofHeight;
			ofTop = ofTop - val;
			$("html, body").animate({ scrollTop: ofTop}, 800, function(){
				$(".banner-wrapper").prepend("<div class='down-animate fadeIn animated' title='Kapat'><span class='slideInDownRep animated'></span></div>");
			});	
		}
		return false;
	});
	$("body").on("click touchstart", function(){
		if ( !$('.form-wrapper:hover').length != 0){
			$(".down-animate").addClass('fadeOut');
			setTimeout(function(){
		    	 $(".down-animate").remove();
		    }, 700);
		}
	});
}

//form bottom
var form = function(){
	if ($(window).scrollTop() > 0){
		$(".form-wrapper").addClass('bottom-active');
		
		// form activites
		$(".form-wrapper .form-control").on("focus", function(){
			if (!window.matchMedia('(max-width: 991px)').matches) {
				$(".checkbox-wrapper").removeClass("d-lg-none").addClass('d-flex animated fadeInUp');
				$("footer").addClass('opform');
			}
		});
	}else{
		$(".form-wrapper").removeClass('bottom-active');
		$(".down-animate").remove();
	}
	if (window.matchMedia('(max-width: 1400px)').matches) {
		$(".form-wrapper").addClass('bottom-active');
	}
}

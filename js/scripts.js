$(document).ready(function() {
	// INIT
	menuMobile();
	backToTop();
	new WOW().init();

	// FUNCTION
	blurSearch();
	fixedMenu();
	
	// SLIDE
	slide_full_width();
	slide_phu_gia();
	slide_brand();
});

function fixedMenu() {
	if($('header.header .mid.nav-fixed').length) {
		$(window).scroll(function(event) {
			var heightHeaderTop = $('header.header .top').height();

			if($(window).scrollTop() > Math.floor(heightHeaderTop)) {
				$('header.header .mid').addClass('fixed');
			} else {
				$('header.header .mid').removeClass('fixed');
			}
		});
	}
}

function backToTop() {
	if ($('#back_to_top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back_to_top').fadeIn();
	            } else {
	                $('#back_to_top').fadeOut();
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back_to_top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
}

function menuMobile() {
	$('nav#menu').mmenu({
		extensions		   : [ 'effect-slide-menu', 'shadow-page'],
		keyboardNavigation : false,
		screenReader 	   : false,
		counters		   : false,
		navbar 		: {
			title		: 'MENU'
		},
		navbars		: [
			{
				position	: 'bottom',
				content		: [
					'<a href="#" target="_blank">Domain.com</a>'
				]
			}
		]			
	});
}

function select2() {
    $('.select2').select2();
}

function slide_full_width() {
	var owl = $('.slide-full-width');
		owl.owlCarousel({
		items: 1,
		margin: 20,
		nav: true,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
	});
}

function slide_phu_gia() {
	var owl = $('.slide-phu-gia');
		owl.owlCarousel({
		items: 1,
		margin: 20,
		nav: true,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoWidth:false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>']
	});
}

function slide_brand() {
	var owl = $('.slide-brand');
		owl.owlCarousel({
		// items: 4,
		// margin: 100,
		nav: true,
		dots: false,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoWidth: false,
		navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
		responsive : {
			0 : {
 				items: 2
			},
		    992 : {
		        items: 3
		    },
		    1200  : {
		    	items: 4
		    }
		}
	});
}

$('#myCollapsible').on('hide.bs.collapse', function (e) {
	$('#'+e.target.id+'_head').removeClass('active');
}).bind('show.bs.collapse', function(ev) {
    $('#'+ev.target.id+'_head').addClass('active');
});


function blurSearch() {
	$('#inpSearch').on('focus', function() {
		$('.blur-wrap').fadeIn();
		$('body').addClass('fixed');
	}).bind('blur', function(event) {
		$('.blur-wrap').fadeOut();
		$('body').removeClass('fixed');
	});
}
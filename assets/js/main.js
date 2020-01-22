$(document).ready(function() {
	//show menu and change icon after click btn
	$(".dropdown-btn").click(function() {
		$(".dropdown-btn__icon , .menu").toggleClass("active");
		$("header").toggleClass("change");
	});
	//hide menu and scroll to section after click menu item
	$(".menu a").click(function() {
		$(".menu , .menu a , .dropdown-btn__icon").removeClass("active");
		$("header").removeClass("change");
		$(this).addClass("active");
		$("html,body").animate(
			{
				scrollTop: $($(this).prop("hash")).offset().top
			},
			900
		);
	});
	//change header background if scroll over disco section
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(".disco").offset().top) {
			$("header").addClass("active");
			$('.banner i').show();
		}	
		else {
			$("header").removeClass("active");
			$(".banner i").hide();
		}
	});
	//slider section slick
	$(".slider__slick").slick({
		dots: true,
		loop: true,
		arrow: true,
		prevArrow: '<i class="fas fa-chevron-left"></i>',
		nextArrow: '<i class="fas fa-chevron-right"></i>',
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// $(document).ready(function() {
	// 	if ($(window).width() < 768) {
	// 		$(".event__box").slick({
	// 			infinite: true,
	// 			speed: 500,
	// 			prevArrow: null,
	// 			nextArrow: null,
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		});
	// 	} else {
	// 		$(".event__box").slick("unslick");
	// 	}
	// });
	// $(window).resize(function() {
	// 	if ($(window).width() < 768) {
	// 		$(".event__box").slick({
	// 			infinite: true,
	// 			speed: 500,
	// 			prevArrow: null,
	// 			nextArrow: null,
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		});
	// 	} else {
	// 		$(".event__box").slick("unslick");
	// 	}
	// });
	//event section in mobile
	$(document).ready(function() {
		if ($(".box__btn").children().is(":visible"))
			$(".box__item").first().addClass("active"); //set default for first item
		else $(".box__item").removeClass("active");
		$(".box__item").each(function() {
			if (!$(this).hasClass("active") && $(".box__btn").children().is(":visible"))
				$(this).hide(); //hide item not has class active
			if ($(this).hasClass("active") && $(".box__btn").children().is(":hidden"))
				$(this).show(); //show item has class active
		});
	});
	//event section resize to mobile
	$(window).resize(function() {
		if ($(".box__btn").children().is(":visible"))
			$(".box__item").first().addClass("active"); //set default for first item
		else $(".box__item").removeClass("active");
		$(".box__item").each(function() {
			if (!$(this).hasClass("active") && $(".box__btn").children().is(":visible"))
				$(this).hide(); 
			if (!$(this).hasClass("active") && $(".box__btn").children().is(":hidden"))
				$(this).show(); 
		});
	});
	//event section's next btn action 
	$(".btn__next").click(function() {
		for (var j = $(".box__item").length - 1; j >= 0; j--) {
			if ($($(".box__item")[j]).hasClass("active") && j < $(".box__item").length - 1) {
				$(".box__item").removeClass("active").hide();
				$($(".box__item")[j + 1]).addClass("active").show();
			}
		}
	});
	//event section's prev btn action 
	$(".btn__prev").click(function() {
		for (var i = 0; i < $(".box__item").length; i++) {
			if ($($(".box__item")[i]).hasClass("active") && i > 0) {
				$(".box__item").removeClass("active").hide();
				$($(".box__item")[i - 1]).addClass("active").show();
			}
		}
	});
	//history section slick
    $(".history__slick").slick({
			centerMode: true,
			centerPadding: "30px",
			dot: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			prevArrow: '<i class="btn__prev"></i>',
			nextArrow: '<i class="btn__next"></i>',
			responsive: [
				{
					breakpoint:992,
					settings: {
						centerPadding: "40px",
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						centerPadding: "40px",
						slidesToShow: 3
					}
				},
				{
					breakpoint: 575,
					settings: {
						centerPadding: "40px",
						slidesToShow: 1
					}
				}
			]
	}); 
	//scroll to top btn click action
	$('.banner i').click(function () {  
		$("html,body").animate(
			{
				scrollTop: 0
			},
			1000
		);
	})
});

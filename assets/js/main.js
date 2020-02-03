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
	//event section in mobile
	$(document).ready(function () {
			if ($(".box__btn").children().is(":visible"))
				$(".box__item").first().addClass("active"); //set default for first item
			else $(".box__item").removeClass("active");
			$(".box__item").each(function () {
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
		if (window.matchMedia("(max-width: 991px)").matches) {
			$('.line__item').hide();
			$('.line__item.active').show();
		}
		if (window.matchMedia("(min-width: 992px)").matches) {
			$('.line__item').show();
		}
		// if (window.matchMedia("(min-width: 1200px)").matches) {
		// 	$(".line__item").removeClass('center,prev,next,last-left,last-right').show();
		// 	$('.line__item').eq(1).removeClass('center,prev,next,last-left,last-right').addClass('last-left');
		// 	$('.line__item').eq(2).removeClass('center,prev,next,last-left,last-right').addClass('prev');
		// 	$('.line__item').eq(3).removeClass('center,prev,next,last-left,last-right').addClass('center');
		// 	$('.line__item').eq(4).removeClass('center,prev,next,last-left,last-right').addClass('next');
		// 	$('.line__item').eq(5).removeClass('center,prev,next,last-left,last-right').addClass('last-right');
		// }
			//show history's timeline item if screen bigger than 768px
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
	//history section right-dot click function
	$(".line__dot-right").click(function () {
		// if (window.matchMedia('(max-width: 1199px)').matches && !$('.line__item.next').hasClass('end')) {
		// 	$('.line__item.prev').removeClass('prev').addClass('last-left').hide();
		// 	$('.line__item.last-right').removeClass('last-right').addClass('next').show();
		// 	$('.line__item.center').removeClass('center').addClass('prev').next().addClass('center').removeClass('next');	
		// }
		// if (window.matchMedia('(max-width: 1199px)').matches && $('.line__item.prev').prev().hasClass('end')) {
		// 	$('.line__item.next').next().addClass('last-right').removeClass('next');
		// 	$('.line__item.prev').prev().addClass('last-left').removeClass('prev');
		// };
		
		if (window.matchMedia('(max-width: 991px)').matches){
			for (var j = $(".line__item").length - 1; j >= 0; j--) {
				//show next item after click
				if ($($(".line__item")[j]).hasClass("active") && j < $(".line__item").length - 1) {
					$(".line__item").removeClass("active").hide();
					$($(".line__item")[j + 1]).addClass("active").show();
				}
			}
		}	
	});
	//history section left-dot click function
	$(".line__dot-left").click(function () {
		// if (window.matchMedia('(max-width: 1199px)').matches && !$('.line__item.prev').hasClass('end')) {
		// 	$('.line__item.next').removeClass('next').addClass('last-right').hide();
		// 	$('.line__item.last-left').removeClass('last-left').addClass('prev').show();
		// 	$('.line__item.center').removeClass('center').addClass('next').prev().addClass('center').removeClass('prev');	
		// }
		// if (window.matchMedia('(max-width: 1199px)').matches && $('.line__item.next').next().hasClass('end')) {
		// 	$('.line__item.next').next().addClass('last-right').removeClass('next');
		// 	$('.line__item.prev').prev().addClass('last-left').removeClass('prev');
		// };
		
		if (window.matchMedia('(max-width: 991px)').matches) {
			for (var i = 0; i < $(".line__item").length; i++) {
				//show previous item after click
				if ($($(".line__item")[i]).hasClass("active") && i > 0) {
					$(".line__item").removeClass("active").hide();
					$($(".line__item")[i - 1]).addClass("active").show();
				}
			}
		}
	});
	//history section timeline heading click function
	$('.line__item h4').each(function () {
		$(this).click(function () {
			$(".line__item").removeClass('active');
			$(this).parent().addClass("active");
		})
	});
	//scroll to top button click action
	$('.banner i').click(function () {  
		$("html,body").animate(
			{
				scrollTop: 0
			},
			1000
		);
	})
	
});

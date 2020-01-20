$(document).ready(function() {
	//show menu and change icon after click btn
	$(".dropdown-btn").click(function() {
		$(".dropdown-btn__icon , .menu").toggleClass("active");
		$("header").toggleClass("change");
	});
	//hide menu and scroll to section after click menu item
	$(".menu a").click(function(e) {
		e.preventDefault();
		$(".menu , .menu a , .dropdown-btn__icon").removeClass("active");
		$("header").removeClass("change");
		$(this).addClass("active");
		$("html,body").animate(
			{
				scrollTop: $($(this).prop("hash")).offset().top
			},
			"slow"
		);
	});
	//change header background if scroll over disco section
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(".disco").offset().top)
			$("header").addClass("active");
		else $("header").removeClass("active");
	});

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
	$(document).ready(function() {
		if (
			$(".box__btn")
				.children()
				.is(":visible")
		)
			$(".box__item")
				.first()
				.addClass("active");
		else $(".box__item").removeClass("active");
		$(".box__item").each(function() {
			if (
				!$(this).hasClass("active") &&
				$(".box__btn")
					.children()
					.is(":visible")
			)
				$(this).hide();
			if (
				!$(this).hasClass("active") &&
				$(".box__btn")
					.children()
					.is(":hidden")
			)
				$(this).show();
		});
	});
	$(window).resize(function() {
		if (
			$(".box__btn")
				.children()
				.is(":visible")
		)
			$(".box__item")
				.first()
				.addClass("active");
		else $(".box__item").removeClass("active");
		$(".box__item").each(function() {
			if (
				!$(this).hasClass("active") &&
				$(".box__btn")
					.children()
					.is(":visible")
			)
				$(this).hide();
			if (
				!$(this).hasClass("active") &&
				$(".box__btn")
					.children()
					.is(":hidden")
			)
				$(this).show();
		});
	});
	$(".btn__next").click(function() {
		for (var j = $(".box__item").length - 1; j >= 0; j--) {
			if (
				$($(".box__item")[j]).hasClass("active") &&
				j < $(".box__item").length - 1
			) {
				$(".box__item")
					.removeClass("active")
					.hide();
				$($(".box__item")[j + 1])
					.addClass("active")
					.show();
			}
			if (
				$($(".box__item")[j]).hasClass("active") &&
				j == $(".box__item").length - 1
			) {
				$($(".box__item")[j])
					.removeClass("active")
					.hide();
				$($(".box__item")[0])
					.addClass("active")
					.show();
			}
		}
	});
	$(".btn__prev").click(function() {
		for (var i = 0; i < $(".box__item").length; i++) {
			if ($($(".box__item")[i]).hasClass("active") && i > 0) {
				$(".box__item")
					.removeClass("active")
					.hide();
				$($(".box__item")[i - 1])
					.addClass("active")
					.show();
			}
			if ($($(".box__item")[0]).hasClass("active")) {
				$($(".box__item")[0])
					.removeClass("active")
					.hide();
				$($(".box__item")[$(".box__item").length - 1])
					.addClass("active")
					.show();
			}
		}
	});
});

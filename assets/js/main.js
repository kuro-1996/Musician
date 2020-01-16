$(document).ready(function () {  
    //show menu and change icon after click btn
    $('.dropdown-btn').click(function () { 
        $('.dropdown-btn__icon , .menu').toggleClass('active');
        $('header').toggleClass('change');
    })
    //hide menu and scroll to section after click menu item
    $('.menu a').click(function (e) {   
        e.preventDefault();
        $(".menu , .menu a , .dropdown-btn__icon").removeClass("active");
        $("header").removeClass("change");
        $(this).addClass('active');
        $("html,body").animate({
            scrollTop: $($(this).prop("hash")).offset().top
        }, 'slow');
    })
    //change header background if scroll over disco section
    $(window).scroll(function () {  
        if ($(this).scrollTop() > $('.disco').offset().top)
            $("header").addClass('active');
        else $("header").removeClass("active"); 
    })
});
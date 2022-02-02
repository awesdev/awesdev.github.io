$(document).ready(function () {
    $('.burger').click(function () {
        $(this).toggleClass('burger_active');

        if ($('.header__nav').css('display') == 'none')
            $('.header__nav').fadeIn();
        else
            $('.header__nav').fadeOut();
    })
})
// acordeon
$('.single h3').on('click', function() {
    if ($(this).hasClass('activeAcordeon')) {
        $(this).next().slideToggle();
        $(this).toggleClass('activeAcordeon');
    } else {
        $('.single h3.activeAcordeon').next().slideUp();
        $('.single h3.activeAcordeon').removeClass('activeAcordeon');
        $(this).next().slideDown();
        $(this).addClass('activeAcordeon');
    }
})
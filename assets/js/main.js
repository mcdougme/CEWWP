var headerHeight = 200;

$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#myNav').removeClass('navbar-top');
    $('#myNav').addClass('navbar-fixed-top');
} else {
    $('#myNav').removeClass('navbar-fixed-top');
    $('#myNav').addClass('navbar-top');
}
});

jQuery('.toggle-nav, .menu a').click(function(e) {
    jQuery('.toggle-nav').toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
});

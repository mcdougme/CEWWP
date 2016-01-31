jQuery('.toggle-nav, .menu a').click(function(e) {
    jQuery('.toggle-nav').toggleClass('active');
    jQuery('.menu ul').toggleClass('active');

    e.preventDefault();
});

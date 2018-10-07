function createCookie(e, o, a) {
    if (a) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
        var t = "; expires=" + n.toGMTString()
    } else var t = "";
    document.cookie = e + "=" + o + t + "; path=/"
}

function readCookie(e) {
    for (var o = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
        for (var t = a[n];
            " " == t.charAt(0);) t = t.substring(1, t.length);
        if (0 == t.indexOf(o)) return t.substring(o.length, t.length)
    }
    return null
}

function collapseNavbar() {
    $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
}
$(window).on("load", function() {
    null == readCookie("loaded") ? ($("#preloader").delay(4e3).fadeOut(2e3, function() {
        $("#content-hide").fadeIn(2e3)
    }), createCookie("loaded", 1, 0)) : ($("#preload").css({
        display: "none"
    }), $("#content-wrapper").fadeIn())
}), $(window).on("load", function() {
    $("#preloader").delay(4e3).fadeOut(2e3, function() {
        $("#content-hide").fadeIn(2e3)
    })
}), $(window).scroll(collapseNavbar), $(document).ready(collapseNavbar), $(function() {
    $("a.page-scroll").bind("click", function(e) {
        var o = $(this);
        $("html, body").stop().animate({
            scrollTop: $(o.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), e.preventDefault()
    })
}), $(".navbar-collapse ul li a").click(function() {
    $(this).closest(".collapse").collapse("toggle")
});
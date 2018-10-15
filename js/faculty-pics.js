var i = 1;
$(".pface").each(function() {
    $(this).css({
        "background-image": "url(css/imgs/faces/faculty/" + i + ".jpg)"
    }), i++
});
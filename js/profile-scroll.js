$(document).ready(function() {
    $("#left").on("click", function() {
        $(".next").removeClass("next"), $(".cur").addClass("next"), $(".cur").removeClass("cur"), $(".prev").addClass("cur"), $(".prev").removeClass("prev"), $(".cur").prev().length > 0 ? $(".cur").prev().addClass("prev") : $(".profile-list").last().addClass("prev")
    }), $("#right").on("click", function() {
        $(".prev").removeClass("prev"), $(".cur").addClass("prev"), $(".cur").removeClass("cur"), $(".next").addClass("cur"), $(".next").removeClass("next"), $(".cur").next(".profile-list").length > 0 ? $(".cur").next(".profile-list").addClass("next") : $(".profile-list").first().addClass("next")
    }), $(".profile-list cur").css({
        display: "inline"
    })
});
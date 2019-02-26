$("#buttons>a").click( function () {

    $("#buttons>a").removeClass("current");
    $(this).addClass("current");


    $(".tabs_content>div").hide();
    t_content=$(this).attr("href");
    $(t_content).show();

    return false
});
$("#buttons>a:first").trigger("click");
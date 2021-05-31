$(function(){
    $("#mobile-btn").on("click", function(){
        console.log("Clicked");
        $(this).closest(".c-navigation__mob--nav").find(".c-navigation__mob--link").toggleClass("closed");
    });

});
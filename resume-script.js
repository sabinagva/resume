$(document).ready(function(){
    console.log("hello this is an example of a console.log. I am leaving this in here to show that I know how it works.");
    $(".sabina").hover( function () {
        $(".sabina").removeClass("active");
    }, function () {
        $(".sabina").addClass("active");
    });
});
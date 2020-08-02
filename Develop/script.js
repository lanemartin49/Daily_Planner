$(document).ready(function(){

    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".reservation").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    });

    $("#hr-9 .reservation").val(localStorage.getItem("hr-9"));
    $("#hr-10 .reservation").val(localStorage.getItem("hr-10"));
    $("#hr-11 .reservation").val(localStorage.getItem("hr-11"));











});
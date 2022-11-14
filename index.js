$( document ).ready(function(){
    $("#cake").hide();
    $("#text").click( function(){
        $("#cake").show();
        document.getElementById('cake').scrollIntoView();

    });
}) 


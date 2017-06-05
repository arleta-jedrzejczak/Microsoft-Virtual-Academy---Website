$('#first').mouseover(function(){
    $('#first img').css("opacity", 0.2);
    $('#first p').css("visibility", "visible")
});

$('#first').mouseout(function(){
    $('#first img').css("opacity", 1);
    $('#first p').css("visibility", "hidden")
});

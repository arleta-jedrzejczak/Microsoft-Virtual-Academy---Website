$('#first').mouseover(function(){
    $('#first img').css("opacity", 0.2);
    $('#first p').css("visibility", "visible")
});

$('#first').mouseout(function(){
    $('#first img').css("opacity", 1);
    $('#first p').css("visibility", "hidden")
});

$('#first').click(function(){
    if($('#recipe').css("display")=="block"){
        $('#recipe').css("display", "none");
    }
    else{
          $('#recipe').css("display", "block");
    }
});

$('#second').mouseover(function(){
    $('#second img').css("opacity", 0.2);
    $('#second p').css("visibility", "visible")
});

$('#second').mouseout(function(){
    $('#second img').css("opacity", 1);
    $('#second p').css("visibility", "hidden")
});

$('#second').click(function(){
    if($('#recipe2').css("display")=="block"){
        $('#recipe2').css("display", "none");
    }
    else{
          $('#recipe2').css("display", "block");
    }
});

$('#third').mouseover(function(){
    $('#third img').css("opacity", 0.2);
    $('#third p').css("visibility", "visible")
});

$('#third').mouseout(function(){
    $('#third img').css("opacity", 1);
    $('#third p').css("visibility", "hidden")
});

$('#third').click(function(){
    if($('#recipe3').css("display")=="block"){
        $('#recipe3').css("display", "none");
    }
    else{
          $('#recipe3').css("display", "block");
    }
});

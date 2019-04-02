$("button").click(function(){
    var name= $("P").val();
    $("p").append(name);
});
$("button").click(function(){
    var amount =$(".B").val();
    var total= amount * 2;
    $("p").append(total);
    $("p").show();
    $(".A").hide();
});

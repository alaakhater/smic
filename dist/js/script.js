AOS.init();
window.addEventListener("scroll",scrollFunction);
var gototop = document.getElementsByClassName("gototop");
window.onload = $(".gototop").css("display","none");
function scrollFunction(){
    if (window.pageYOffset > 300){
    $(".gototop").fadeIn(500,function(){});
    }else{
    $(".gototop").css("display","none");
    }
}

$("#btn1").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem1").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn2").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem2").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn3").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem3").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn4").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem4").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn5").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem5").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn6").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem6").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn7").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem7").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})

$("#btn9").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem9").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn10").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem10").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn11").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem11").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn12").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem12").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn13").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem13").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn14").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem14").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})
$("#btn15").on("click",function(){
    $("#myitems").css("display","none");
    $("#myitem15").fadeIn(500,function(){});
    $(".servitem").css("backgroundColor","rgba(8, 42, 64, 0.6)");
})


$(".backtoservice").on("click",function(){
    $(".servitem").css("display","none");
    $("#myitems").fadeIn(500,function(){});
})


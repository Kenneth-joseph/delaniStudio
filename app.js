$(Document).ready(function(){
$("#image1,#para1").on("click",function(){
    $("#image1,#para1").toggleClass("d-none");
});

$("#image2,#para2").on("click",function(){
    $("#image2,#para2").toggleClass("d-none");

});
$("#image3,#para3").on("click",function()
{
    $("#image3,#para3").toggleClass("d-none");
});

  /*PORTFOLIO*/
$(".pic1").mouseenter(function(){
    $(".dc1").show(2000);
    
});
 $(".pic1").mouseleave(function(){
   $(".dc1").hide(1000);
  })

$(".pic2").mouseenter(function(){
    $(".dc2").show(2000);
});
$(".pic2").mouseleave(function(){
    $(".dc2").hide(1000);
   })

   $(".pic3").mouseenter(function(){
    $(".dc3").show(2000);
});
$(".pic3").mouseleave(function(){
    $(".dc3").hide(1000);
   })

   $(".pic4").mouseenter(function(){
    $(".dc4").show(2000);
});
$(".pic4").mouseleave(function(){
    $(".dc4").hide(1000);
   });

   $(".pic5").mouseenter(function(){
    $(".dc5").show(2000);
});
$(".pic5").mouseleave(function(){
    $(".dc5").hide(1000);
   });

   $(".pic6").mouseenter(function(){
    $(".dc6").show(2000);
});
$(".pic6").mouseleave(function(){
    $(".dc6").hide(1000);
   });
   $(".pic7").mouseenter(function(){
    $(".dc7").show(2000);
});
$(".pic7").mouseleave(function(){
    $(".dc7").hide(1000);
   });
   $(".pic8").mouseenter(function(){
    $(".dc8").show(2000);
});
$(".pic8").mouseleave(function(){
    $(".dc8").hide(1000);
   });
});
 


function send(){
    var nameR= document.getElementById("name").value;
    var emailE = document.getElementById("email").value;
    alert("your name is "+ nameR + "your emal is " + emailE);
}

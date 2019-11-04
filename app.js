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
})
});
 


function send(){
    var nameR= document.getElementById("name").value;
    var emailE = document.getElementById("email").value;
    alert("your name is "+ nameR + "your emal is " + emailE);
}

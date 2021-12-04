
function hello(arg){
    console.log("Hello " +arg);
    return "Traveling to London";
}

//let menu=document.getElementById("menu-container");

//menu.style.display="none";
//menu.style.display="block";
//menu.remove();
//console.log(document.getElementsByClassName("menu"));
//console.log(document.getElementsByTagName("a"));

$("#menu-container").hide();
$("#menu-container").show();//by id
$("#menu-container").css({'background':'grey'});//by class
$("body").css({'background':"#dedede"});//by tag
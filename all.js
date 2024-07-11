$(".oneText").click(function(){
    $(".hiddenOne").toggle();
});
$(".twoText").click(function(){
    $(".hiddenTwo").toggle();
});
$(".threeText").click(function(){
    $(".hiddenThree").toggle();
});

$(".oneUp").click(function(){
    $(".hiddenOne").toggle();
});
$(".twoUp").click(function(){
    $(".hiddenTwo").toggle();
});
$(".threeUp").click(function(){
    $(".hiddenThree").toggle();
});

// media1050漢堡選單
// const hamburgerIcon = document.querySelector(".fa-solid");
// hamburgerIcon.addEventListener("click",function(e){
//     if(e.target.nodeName == "I"){
//         $(".subTitle").toggle();
//     }
// });
$(".hamburgerIcon").click(function(){
    $(".subTitle").toggle();
})
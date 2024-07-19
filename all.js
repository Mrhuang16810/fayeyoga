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
// $(".fa-solid").click(function(){
//     $(".subTitle").toggle();
// })
$(document).ready(function(){
    $('.fa-solid').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('show');
    });
});

// classOrder點擊跳出小框
$(".sTitle").click(function(){
    $(".eyeOneContent").toggle();
});
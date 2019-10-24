$(document).ready(function(){
  $("#age-checker-btn").click(function(){
    var age = parseInt(prompt("How old are you?"));
    if (age <= 7) {
      $(".main-page").hide();
      $(".riderip1").toggle();
    } else if (age <= 17) {
      $(".riderip2").toggle();
      $(".riderip1").toggle();
      $(".main-page").hide();
    } else if (age >= 18){
      $(".riderip3").toggle();
      $(".riderip2").toggle();
      $(".riderip1").toggle();
      $(".main-page").hide();
    }
    else {
      alert("go to a diffrent park")
    }
  });

  $("#return").click(function(){
    $(".riderip3").hide();
    $(".riderip2").hide();
    $(".riderip1").hide();
    $(".main-page").show();
  });
});

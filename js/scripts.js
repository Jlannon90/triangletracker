$(function() {


  $("#triTrack").submit(function(event) {
    event.preventDefault();
    var sideOne = parseInt($("#sideOne").val());
    var sideTwo = parseInt($("#sideTwo").val());
    var sideThree = parseInt($("#sideThree").val());

    if ((sideOne <= 0) || (sideTwo <= 0) || (sideThree <= 0)){
      $(".triangleType").text("NOT A TRIANGLE!");

    } else if ((sideOne + sideTwo <= sideThree) || (sideOne + sideThree <= sideTwo) || (sideTwo + sideThree <= sideOne)){
      $(".triangleType").text("NOT A TRIANGLE!");

    } else if ((sideOne === sideTwo) && (sideOne === sideThree)){
      $(".triangleType").text("Equilateral Triangle");

    } else if ((sideOne === sideTwo) || (sideOne === sideThree) || (sideThree === sideTwo)) {
      $(".triangleType").text("Isosceles");

    } else {
      $(".triangleType").text("Scalene");
    }

    $(".answer").show();
  });
});

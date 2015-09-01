//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function () {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked elements
  $(this).addClass("selected");
  //Cache current color
  color = $("this").css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function () {
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//Update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor).mousemove(changeColor);

//When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines
//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");

//When clicking on control list items
$(".controls").on("click", "li", function () {
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

//When "Add Color" is pressed
$("#addNewColor").click(function () {
    //Append the color to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    //Select the new color
    $newColor.click();

});

//On mouse events on the canvas
    //Draw lines
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(20, 10);
    context.lineTo(20, 20);
    context.lineTo(10, 20);
    context.closePath();
    context.stroke();
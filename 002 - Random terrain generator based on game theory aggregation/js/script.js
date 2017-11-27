$(document).ready(function() {
  // This is the vector
  var vector = {};
  // Get the vector json
  //var vectorFilePath = "js/vector.json";
  //$.getJSON(
  //  vectorFilePath,
  //  function(data) {
  //    vector = data;
  //  }
  //);
  vector = {
    
  };
  var hdoc = $(window).height();
  var wdoc = $(window).width();
  var h = hdoc/2 - 30;
  var w = wdoc/2 - 50;
  createImg("img/templates/100x60/crossroads-2.svg", "a", {"top": h, "left": w});
  var h1 = h - 30;
  var w1 = w - 50;
  createImg("img/templates/100x60/roads-1.svg", "a", {"top": h1, "left": w1});
  var h1 = h + 30;
  var w1 = w + 50;
  createImg("img/templates/100x60/roads-1.svg", "a", {"top": h1, "left": w1});
  var h1 = h - 30;
  var w1 = w + 50;
  createImg("img/templates/100x60/roads-2.svg", "a", {"top": h1, "left": w1});
  var h1 = h + 30;
  var w1 = w - 50;
  createImg("img/templates/100x60/roads-2.svg", "a", {"top": h1, "left": w1});
  
});
function createImg(src, id, css) {
  $("<img src="+ src +" id="+ id +">").css(css).appendTo(".container");
}
function getPoints() {
  var x1 = parseInt($("#x1")[0].value);
  var y1 = parseInt($("#y1")[0].value);
  var x2 = parseInt($("#x2")[0].value);
  var y2 = parseInt($("#y2")[0].value);
  var m = (y2-y1)/(x2-x1);
  var sol = "";
  for (var i = x1; i <= x2; i++) {
    var yi = m*(i - x1) + y1;
    // Check if the value is proper integer
    if ((yi - Math.floor(yi)) == 0) {   
      sol = sol + "(" + i + ",";
      sol = sol + yi + ")";
      sol = sol + ",";
    }
  }
  $("#solution").html(sol);
}
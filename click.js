var canvas = document.getElementById('mainCanvas');
context = canvas.getContext('2d');

var scorePlus = 5;
var multiplier = 1;

canvas.addEventListener('click', function(event) {
  var xVal = event.pageX,
    yVal = event.pageY;
  console.log(xVal, yVal);
  //var color = RandomRGBColor();

  if (yVal > 200 && yVal < 300 && xVal > 200 && xVal < 300) {
    score += scorePlus*multiplier;
    generateShapeChildren();
    //context.fillStyle = RandomRGBColor();
    sideNum = sidesRandom();
    if (counterThing < 135) {
      timesPerSec++;
    }
    if (timesPerSec >=5){
      multiplier = multiplier*1.1;
    }
    counterThing = 0;
  }
});


canvas.addEventListener('mouseup', function(event){
  var xVal = event.pageX,
    yVal = event.pageY;
  console.log(xVal, yVal);
  //var color = RandomRGBColor();

  if (yVal > 200 && yVal < 300 && xVal > 200 && xVal < 300) {
    score += scorePlus*multiplier;
    generateShapeChildren();
    context.fillStyle = RandomRGBColor();
    sideNum = sidesRandom();
    if (counterThing < 135) {
      timesPerSec++;
    }
    if (timesPerSec >=5){
      multiplier = multiplier*1.1;
    }
    counterThing = 0;
  }
});

canvas.addEventListener('mousedown', function(event){
  var xVal = event.pageX,
    yVal = event.pageY;
  console.log(xVal, yVal);
  //var color = RandomRGBColor();

  if (yVal > 200 && yVal < 300 && xVal > 200 && xVal < 300) {
    score += scorePlus*multiplier;
    generateShapeChildren();
    context.fillStyle = RandomRGBColor();
    sideNum = sidesRandom();
    if (counterThing < 135) {
      timesPerSec++;
    }
    if (timesPerSec >=5){
      multiplier = multiplier*1.1;
    }
    counterThing = 0;
  }
});

$(document).ready(function(){
  var theColor = colorMatch();
  $('.boxcontainer').append('<div>' + theColor + '</div>');
  $('.boxcontainer').append('<div data-color="red" class="red box"></div><div data-color="blue" class="blue box"></div><div data-color="green" class="green box"></div><div data-color="yellow" class="yellow box"></div>')
  $('.boxcontainer').on('click', '.box', function() {
  if (theColor == $(this).data('color')) {
    alert("Success!");
    window.location.reload();
  }else{
    alert("Wrong!");
  }
})
 function colorMatch() {
var colorcode = randomNumber(0, 3);
   switch(colorcode) {
   case 0:
   var givenColor = 'red'
   break;
   case 1:
   var givenColor = 'blue'
   break;
   case 2:
   var givenColor = 'green'
   break;
   case 3:
   var givenColor = 'yellow'
   break;
}
return givenColor;
}
 });
 function randomNumber(min, max){
     return Math.floor(Math.random() * (1 + max - min) + min);
}

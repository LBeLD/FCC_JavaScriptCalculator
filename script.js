$(document).ready(function() {
  var inputs = [],
      showDisplay,
      finalResult;

// function to add string to display
function addToDisplay(){
  showDisplay = inputs.join('');
  $('#showDisplay').html(showDisplay);
}

//on click function for all numbers, '.' and operator keys
$('.regular').click(function(){
  inputs.push(this.value);
  addToDisplay();

});

//on click function to clear all
$('#ac').click(function(){
  inputs = [];
  addToDisplay();

});

//on click function to clear last typed input
$('#ce').click(function(){
inputs.length--;
addToDisplay();
});

//on click function to show final result by clicking equal key
$('#equal').click(function(){
  //check if first digit is '* or '/'
  if(inputs[0] === '*' || inputs[0] === '/'){
    $('#showDisplay').html('error');
  //check invalid operators and print error
  } else {
    for (var i = 0; i < inputs.length; i++){
      if(inputs[i+1] == inputs[i] && inputs[i+1] && inputs[i] === '.'){
        $('#showDisplay').html('error');
      } else if (inputs[i+1] == inputs[i] && inputs[i+1] && inputs[i] === '+') {
        $('#showDisplay').html('error');
      } else if (inputs[i+1] == inputs[i] && inputs[i+1] && inputs[i] === '-') {
        $('#showDisplay').html('error');
      } else if (inputs[i+1] == '/' && inputs[i] == '*'){
        $('#showDisplay').html('error');
      } else if (inputs[i+1] == '*' && inputs[i] == '/') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '+' && inputs[i] == '*') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '*' && inputs[i] == '+') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '-' && inputs[i] == '*') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '*' && inputs[i] == '-') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '+' && inputs[i] == '/') {
        $('#showDisplay').html('error');
      }else if (inputs[i+1] == '/' && inputs[i] == '+') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '-' && inputs[i] == '/') {
        $('#showDisplay').html('error');
      }
      else if (inputs[i+1] == '/' && inputs[i] == '-') {
        $('#showDisplay').html('error');
      }
    }
  }

//check the length of a number and adjust it to the size of the display
  finalResult = eval(showDisplay);
  if (finalResult.toString().length > 10) {
     finalResult = finalResult.toString().slice(0,10);
  }
  //reset inputs to equal the final result for further operations
  inputs = [finalResult];
  $('#showDisplay').html(finalResult);

});

});

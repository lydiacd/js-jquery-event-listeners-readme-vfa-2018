//define functions here

// 1. Define a function getIt that does not accept a parameter. The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".

$('p').on('clicked', function getIt(){
  return "Hey!"
});

// 2. Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
$('img').on('load', function frameIt() {
  addClass("tasty") 
})

// 3. Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.

// 4. Define a function submitIt that does not accept a parameter. The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".

$(document).ready(function(){

// call functions here

});

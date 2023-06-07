// var audio=new Audio('crash.mp3');

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  
//     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//     //    audio.play();
//     this.
//     })
//     }
    


// Create an object to map button classes to their corresponding audio files
var audioMap = {
    w: 'tom-1.mp3',
    a: 'tom-2.mp3',
    s: 'tom-3.mp3',
    d: 'tom-4.mp3',
    j: 'kick-bass.mp3',
    k: 'snare.mp3',
    l: 'crash.mp3',
   
   
  };
  
  // Function to play the corresponding sound based on the button class
  function playSound(buttonClass) {
    var audio = new Audio(audioMap[buttonClass]);
    audio.play();
  }
  
  // Add event listeners to the drum buttons
  document.querySelectorAll(".drum").forEach(function(button) {
    button.addEventListener("click", function() {
      var buttonClass = this.innerText;
      playSound(buttonClass);
    });
  });
  
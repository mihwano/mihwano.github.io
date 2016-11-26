$(document).ready(function(){
  $('.photo').mouseenter(function(){
    var rotation = function (){
       $('.photo').rotate({
          angle:0, 
          animateTo:10,
          duration:600,
          callback: rotationBack
       });
    }

    var rotationBack = function() {
        $('.photo').rotate({
          angle:0, 
          animateTo:-10,
          duration:600,
          callback: rotation
       });
    }
    rotation();
  });
  $('.photo').mouseleave(function(){
    $('.photo').rotate(0);
    $('.photo').stopRotate();
  });
});
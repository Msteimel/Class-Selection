$(function() {
  

//Main Class Sliders
  $('.class').click(function() {
    $('.class-info').slideUp('fast');
    $('#' + $(this).data('target')).slideToggle('slow');
    $('.class').removeClass('active');
    $(this).addClass('active');
  });  


//Sub-Class sliders
  $('.sub-class').click(function() {
    $('.sub-class-info').slideUp('fast');
    $('#' + $(this).data('target')).slideToggle('slow');
    $('.sub-class').removeClass('active');
    $(this).addClass('active'); 
  }); 


//button color change
  $('#fighter').click(function(){
   $('button').removeClass('btn-primary btn-success').addClass('btn-danger');  
      });

  $('#wizard').click(function() { 
   $('button').removeClass('btn-danger btn-success').addClass('btn-primary'); 
      });

  $('#rouge').click(function() { 
   $('button').removeClass('btn-primary btn-danger').addClass('btn-success'); 
     });

//Smooth Scrolling
 $('a[href^="#home"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
   });



});

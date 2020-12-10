// const body = document.body;
const nav = document.getElementById('nav-to-toggle');
const btn = document.getElementById('nav-button');

btn.addEventListener('click', _ => nav.classList.toggle('show'));

// prevent default
btn.addEventListener('mousedown', (e) => { e.preventDefault() });


//Acordion on FAQ page
$(function() {
    $('.question').click(function() {
      var $answer = $(this).find('.answer');
      //Check if answer is already open...
      if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        // Hide answer
        $answer.slideUp();
        // Change text from "-" to "+"
        $(this).children('span').text('+');
        
      } else {
        $answer.addClass('open'); 
        //Show $answer
         $answer.slideDown();
        // Change text from "+" to "-"
        $(this).children('span').text('－');
      }
    });
  });
  
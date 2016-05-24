$(document).ready(function(){


  // ADDS a paragraph after Div #One ------------|>
      // $('#one').after('<p>  Starting to Click </p>')

// Creates VARIABLE of the above <p>, and MOVES it after Div #Two ------------|>
      //  var $paragraph = $('p');
      // $('#two').after($paragraph);
// REMOVES/DELETES the element itself and all of its children------------|>
      // $('$('p')').remove();
// REMOVES/DELETES the element's content and all of its children------------|>
      // $('$('p')').empty());
// End of ADDS, VARIABLES, REMOVES, DELETES Examples------------|>

// For HIGHLIGHTED Example------------|>
// Added the class .highlighted to the id of #text
      //  $('#text').addClass('highlighted')
// Added the FUNCTION to add the .highlighted class when id #text is CLICKED------------|>
      // $('#text').click(function() {
      //  $(this).addClass('highlighted')
      // });
// Using the TOGGLECLASS Function #text, so when it is clicked, it will highlight if unhighlighted, or unhighlight if highlighted------------|>
    $('#text').click(function() {
    $(this).toggleClass('highlighted')
    });

// Using HEIGHT, WIDTH, and CSS function selector, this changes H, W, and targets a CSS selector(ex. here is border-radius)

    $(".heightAndWidth").height("200px");
    $(".heightAndWidth").width("200px");
    $(".heightAndWidth").css("border-radius","10px");

// Using HTML to MODIFY CONTENT
    $('.modifyContent').html("jQuery magic in action!");


    // Getting the VALUE from an INPUT on a FORM example
    $('#button').click(function(){
    var toAdd = $('input[name=checkListItem]').val();
    console.log(toAdd);
    // Printing aka APPENDING to the page, the ITEM ENTERED
    $('.list').append('<div class="item">' + toAdd + '</div>');
      });
      $(this).on('click', '.item', function(){
        $(this).remove();
      });
// Trigger an effect as soon as Doc loads. This would go right under line 1 of this file
    //  $('div').fadeOut('fast');

// Trigger an effect when a certain thing is CLICKED on
// $('.meteor').click(function(){
//      $(this).fadeOut('fast');
//      });

// Trigger an effect when a certain thing is HOVERED on
     $('.meteor').hover(function(){
          $(this).addClass('red');
          });
// Trigger an effect when a certain thing is DOUBLE-CLICKED on
      $('.blueBox').dblclick(function(){
       $(this).fadeOut('slow');
       });

// Change background color based on user selection
 $("#color").on("change", function (event) {
   var color = $(this).val();
   $("body").css("background-color", color);
     });
// <!-- Hover Example -->
     $('div').hover(
     function(){
     $(this).addClass('active');
     },
     function(){
      $(this).removeClass('active');
     });
// Name Example
     $('.nameExample').focus(function(){
    $(this).css('outline-color', '#FF0000');
 });
    });

// Keydown Example
// $(document).keydown(function(){
//         $('.keydown').animate({left:'+=50px'},500);
//         });
// Moving Mario Example
        $(document).keydown(function(key) {
          switch(parseInt(key.which,10)) {
  			// Left arrow key pressed
  			case 37:
  				$('.mario').animate({left: "-=10px"}, 'fast');
  				break;
  			// Up Arrow Pressed
  			case 38:
  				$('.mario').animate({top: "-=10px"}, 'fast');
  				break;
  			// Right Arrow Pressed
  			case 39:
  				$('.mario').animate({left: "+=10px"}, 'fast');
  				break;
  			// Down Arrow Pressed
  			case 40:
  				$('.mario').animate({top: "+=10px"}, 'fast');
  				break;
  		}

// Moving a sign with Animate
  // $('.humanSign').animate({ top: '+=100px'}, 1000 );

// Moveable Car Example
  $('#car').draggable();

  	});

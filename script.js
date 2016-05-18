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
    });

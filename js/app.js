$(function() {

  //adding new list item on click
  $('button').click(function() {
    var $input = $('input').val();
    if($input === '') {
      return 0;
    } else {
    var item = '<li>' + $input + '</li>';
    $('ul').append(item);
    $('input').val("");
    };
  });

  //adding ability to strikethrough items
  $('body').on('click' , 'li', function () {
     if ($(this).hasClass('done') === true) {
       $(this).removeClass('done');
       $(this).addClass('delete');
     } else if ($(this).hasClass('delete') === true) {
       $(this).removeClass('delete');
     } else {
       $(this).addClass('done');
     };
  });
});

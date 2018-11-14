$(document).ready(() => {
  $('.cal').hide();
  $('.call').hide();
  $('.illinoise').hide();
  $('.michigan').hide();

  $('img').on('click', event => {
    $(event.currentTarget).next().toggle('audio');
  })


});

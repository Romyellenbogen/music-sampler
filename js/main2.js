$(document).ready(() => {

  $('.intro-image').on('click', () => {
    $('.intro-text').slideToggle();
  });

function hideAll() {
  $('#carrie').hide();
  $('#cmbyn').hide();
  $('#illinoise').hide();
  $('#michigan').hide();
}

$('#cmbyn').hide();
$('#illinoise').hide();
$('#michigan').hide();

$('.album').click(function () {
  hideAll();
  switch ($(this).attr('id')) {
    case "carrieimg":
    $('#carrie').show();
    break;
    case "cmbynimg":
    $('#cmbyn').show();
    break;
    case "illinoiseimg":
    $('#illinoise').show();
    break;
    case "michiganimg":
    $('#michigan').show();
    break;
  }
  $('audio').each(function(){
      this.pause();
      this.currentTime = 0;
  });
});




});

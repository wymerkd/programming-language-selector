$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();
    var firstResponse = $("input:radio[name=firstResponse]:checked").val();
    var secondResponse = $("input:radio[name=secondResponse]:checked").val();
    var thirdResponse = $("input:radio[name=thirdResponse]:checked").val();
    var fourthResponse = $("input:radio[name=fourthResponse]:checked").val();
    var fifthResponse = $("input:radio[name=fifthResponse]:checked").val();
    console.log(firstResponse, secondResponse, thirdResponse, fourthResponse, fifthResponse)

    if (firstResponse === 'mac') {
      $('#language1').show();
    }
    if (firstResponse === 'pc') {
      $('#language2').show();
    }
    if (secondResponse === 'iphone') {
      $('#language1').show();
    }
    if (firstResponse === 'android') {
      $('#language3').show();
    }
  });
});

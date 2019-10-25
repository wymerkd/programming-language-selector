$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();
    var firstResponse = $("input:radio[name=firstResponse]:checked").val();
    var secondResponse = $("input:radio[name=secondResponse]:checked").val();
    var thirdResponse = $("input:radio[name=thirdResponse]:checked").val();
    var fourthResponse = $("input:radio[name=fourthResponse]:checked").val();
    var fifthResponse = $("input:radio[name=fifthResponse]:checked").val();
    $(".hideMe").hide();
    
    if (firstResponse === 'mac' && secondResponse === "iphone" && thirdResponse === "desktop" && fourthResponse === "elon" && fifthResponse === "frustration") {
      $('#language1').show();
    } else if (firstResponse === "pc" && secondResponse === "android" && thirdResponse ===   "mobile" && fourthResponse === "stephen" && fifthResponse === "persevere") {
      $('#language2').show();
    } else {
      $('#language3').show();
    }





  });
});

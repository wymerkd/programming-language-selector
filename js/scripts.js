$(document).ready(function() {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();
    var firstResponse = $("input:radio[name=firstResponse]:checked").val();
    console.log(firstResponse)
  });
});

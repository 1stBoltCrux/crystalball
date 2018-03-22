$(document).ready(function() {
  $("form").submit(function(event) {
    $(".invis").hide();
    $("body").removeClass("fireworks");
    $("h2.invis").fadeIn();
    var workEthicPts = parseInt($("input:radio[name=workethic]:checked").val());
    var dressPts = parseInt($("input:radio[name=dress]:checked").val());
    var attitudePts = parseInt($("input:radio[name=attitude]:checked").val());
    var primaryResult = workEthicPts + dressPts + attitudePts;

    var strengthPts = parseInt($("input:radio[name=strength]:checked").val());
    var intelligencePts = parseInt($("input:radio[name=intelligence]:checked").val());
    var agilityPts = parseInt($("input:radio[name=agility]:checked").val());
    var secondaryResult = strengthPts + intelligencePts + agilityPts;


    if (primaryResult > 7) {
      $(".scumbag").fadeIn();
      $("body").addClass("fireworks");
    } else if (8 > primaryResult && primaryResult > 5) {
      $(".average").fadeIn();
    } else {
      $(".ceo").fadeIn();
    };

    if (secondaryResult > 6) {
      $(".shanty").fadeIn();
    } else {
      $(".suv").fadeIn();
    };

    event.preventDefault();
  });
});

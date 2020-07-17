$(function(){
  	 $("p").hide();
  $("button").click(function anyting(){
    $("p").toggle();
  });
  $("p").click(function anytime(){
    $("p").html("you can <b>entract</b> with me");
  });
});
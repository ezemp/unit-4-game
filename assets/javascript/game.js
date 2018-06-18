

$(".defeat-img").hide();
    
var winNum = 70
$("#winning-number").text(winNum);

var counter = 0
var stoneOptions = [15, 5, 13, 7]
   
for (var i = 0; i < stoneOptions.length; i++){
    var stoneImage = $("<img>")
    stoneImage.addClass("stoneImg")
    stoneImage.attr("src","assets/images/crystal3.jpg")
    stoneImage.attr("data-crystalvalue", stoneOptions[i]);
    $("#warpStone").append(stoneImage);
}
$(".stoneImg").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
     crystalValue = parseInt(crystalValue);
    counter += crystalValue
    $("#curret-score").text(counter)
    
     if(counter === winNum){
         $(".stoneImg").hide()
         $(".victor-img").show()
         alert ("Victory");
     }
     else if (counter >= winNum){
       
         $(".stoneImg").hide()
         $(".defeat-img").show()
         
    }
});

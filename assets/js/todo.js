 var dateStr = Date().split(" ");
 var date = document.getElementById("date").textContent = dateStr.slice(0,4).join(" ").toLowerCase();	

$( document ).ready(function(){
	$("li").remove(); 
})

$("li").click(function(event){
	$(this).css("color", "blue");
	$(this).remove();
	event.stopPropagation();
});

$("span").click(function(event){
	$(this).parent().fadeOut(600,function(){
		$(this).remove(); 
	})
	event.stopPropagation();
})
$("li").hover(function(event){
	$(this).children().show();
})
$("ul").on("click", "li", function(){
	$(this).remove();
})
// To prevent bubbling, utilize the "event" object with stopPropagation

// New -->  .parent();	// selects parent of element
// 			.stopPropagation();  // prevents bubbling
// 			.fadeOut();   // function utilizing timed callback measured in milliseconds
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		let inputText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + inputText + "</li>");
		$("input[type='text']").val('');
	console.log(inputText);
}});

// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	//ul is parentclass, but still code runs only when li clicked
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var inputText = $(this).val();
		$("ul").append("<li><span>X </span>" + inputText + "</li>");
		$(this).val("");
	}
});




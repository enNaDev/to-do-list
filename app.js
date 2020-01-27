// Toggle collapse the input field
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

// Check off specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); /* $(this) does not refer to the span, but refers to the li because of the .parent()*/
	});
	event.stopPropagation();
});

// Create a new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".element").on("click",function() {
	//$("#menu").fadeIn();
	var e=this;
	$("#menu1").fadeIn();

	$("#droite").on("click",function(){
		var nominantion=prompt("nommination : ");
		$(e).after("<li class='element'><a class='btn btn-outline-info'  href='#' >"+nominantion+"</a></li>");
		});
	

	$("#gauche").on("click",function(){
		var nominantion=prompt("nommination : ");
		$(e).before("<li class='element'><a class='btn btn-outline-info'  href='#' >"+nominantion+"</a></li>");
		});

	$("#fils").on("click",function(){
		var nominantion=prompt("nommination : ");
		$(e).append("<ul><li class='element'><a class='btn btn-outline-info'  href='#' >"+nominantion+"</a></li></ul>");
		});

	$("#close").on("click",function(){$("#menu1").fadeOut();});
});

//$().button('toggle')
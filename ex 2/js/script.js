var div_open = false;

function circleWider(){
	if (div_open){
		document.getElementsByTagName("div")[0].className="";
		div_open = false;
	} else {
	//assign the div a class it didnt have before.
	document.getElementsByTagName("div")[0].className="final";
	div_open = true;
	}
}

document.getElementsByTagName("div")[0].onclick= 
	function(){
			circleWider();
	};


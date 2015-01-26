var div_open = false;

function makeCircle(e){
	e = (e || event);//for older browsers.
	//console.log(e);
	//make an HTML element, not on the page yet
	var circle = document.createElement("div");
	circle.style.width="20px";
	circle.style.height="20px";
	circle.style.position= "absolute";
	//its x and y coordinate on the page are its css 
	//left and top properties
	circle.style.left = e.clientX + "px";
	circle.style.top = e.clientY+ "px";
	//add the element to the page.
	document.body.appendChild(circle);
}

document.onmousemove= 
	function(e){
			makeCircle(e);
	};


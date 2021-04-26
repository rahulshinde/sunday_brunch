var width;
var height;
var el;
var current;


window.addEventListener('DOMContentLoaded', function(){
	el = document.querySelector("#slideshow_inner_container");
	current = 0;
	width = window.innerWidth;
	height = window.innerWidth;
	startSlideshow();
	window.addEventListener("mousemove", mouseMove);
	window.addEventListener("resize", resizeHandler);
})

function mouseMove(e){
	e.stopPropagation();
	e.preventDefault();
	console.log(e.clientX);
	console.log(e.clientY);
	var transform_x = (-e.clientX / width * 100 + 50)/2; 
	var transform_y = (-e.clientY / height * 100 + 50)/2; 
  el.style.transform = 'translate(' + transform_x + "%, " + transform_y + "%)";
}

function startSlideshow(){
	setInterval(function(){
		current += 1;
		if (current > 9){
			current = 0;
		}
		document.querySelector(".slideshow_image.current").classList.remove('current');
		document.querySelectorAll(".slideshow_image")[current].classList.add('current');;
	}, 6000);
}

function resizeHandler(){
	width = window.innerWidth;
	height = window.innerWidth;	
}

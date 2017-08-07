var i = 0;
var colors = ['red', 'green', 'orange', "orangered", "skyblue", "purple", "lightblue", "yellow", "peachpuff", "brown", "blue","black"];
window.setInterval(function () {
	if(i<12){
		i += 1;
		$(".first", ".second",".third",".forth",".fifth", ".sixth", ".seventh",".eight", ".ninth",".tenth", ".eleventh", ".twelveth").fadeOut(100, function (){
			$(this).css("background", `${colors[i]}`);
		})
		.fadeIn(900);
	}
	else {
		i=0;
		$(".second").fadeOut(100, function (){
			$(this).css("background", `${colors[i]}`);
		})
		.fadeIn(900);
	}
}, 10000);

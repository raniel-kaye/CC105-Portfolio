

function setbackground(){

	var x = document.body;
	var color = ["#F0FFFF", "#F0F8FF", "#F5F5DC", "##FFE4C4"];


	setInterval(function() {
	   for(let y = 0; y < 4; y++){
	    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
	  }
	}, 2000) ;
}
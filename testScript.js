$( "body" ).append( "<p style='width: 100px;he;height: 30px;position: fixed;right: 0;top: 0;background-color: white;z-index: 999;color: black;text-align: center;'>Likes: <span id='lk00'>0</span> </p>" );
var conte = 0;
(function loop(conte) {
	if (typeof conte == 'undefined'){
		var conte = 1;
	}else{
		conte++;
	}

	
	$( "#lk00" ).empty();	
	$( "#lk00" ).html(conte);		

    var rand = Math.round(Math.random() * (5000 - 500)) + 10000;
    setTimeout(function() {
		
 $('._jveic._rhgel > a')[0].click();
		setTimeout(function(){
			$('.coreSpriteRightPaginationArrow')[0].click();
}, 2000);

	if(conte == 100){
		//setpausa(function(){}, 360000);
		alert("100 like - Are you sure to continue?");
	}	
	
		
		loop(conte);  
		
    }, rand);
}());
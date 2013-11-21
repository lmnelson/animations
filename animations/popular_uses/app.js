// Starting Values 
PSD.bubble.opacity 		= 0;
PSD.message_1.opacity = 0;  
PSD.message_2.opacity = 0;  
PSD.message_3.opacity = 0;


PSD.prescriptions.on("click", function(){

	utils.delay(0, function(){
		PSD.message_1.x = 0;
		PSD.message_1.y = 250;
		PSD.message_1.animate({
			properties:{ x: 190, y: 152, opacity: 1},
			time: 100,
			curve: "ease-in-out"
		})	
	})
	 
	utils.delay(200,function(){
		PSD.message_2.x = 0; 
		PSD.message_2.y = 300; 
		PSD.message_2.animate({
			properties:{ x: 245, y: 184, opacity: 1},
			time: 100,
			curve: "ease-in-out"
		})	
	})

	utils.delay(300,function(){
		PSD.message_3.x = 0; 
		PSD.message_3.y = 350; 
		PSD.message_3.animate({
			properties:{ x: 299, y: 215, opacity: 1},
			time: 100,
			curve: "ease-in-out"
		})	
	})


	utils.delay(500,function(){
		PSD.bubble.y = 200; 
		PSD.bubble.animate({
			properties: {opacity: 1, y: 100},
			time: 100,
			curve: "ease-in-out"
		})
	})
})










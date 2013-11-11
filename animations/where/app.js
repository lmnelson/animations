PSD.map.opacity = 0;
PSD.blip.opacity = 0; 
PSD.blip.scale = 0.1; 
PSD.epicenter.y = -200;
PSD.content.y = 330;
PSD.content.opacity = 0;

utils.delay(400, function(){
	PSD.content.animate({
		properties: { y: 300, opacity: 1},
		time: 200,
		curve: "ease-in-out"
	})
})

utils.delay(800, function(){
	PSD.epicenter.animate({
		properties: { y: 225},
		time: 100,
		curve: "ease-in-out"
	})
})

utils.delay(1000, function(){
	PSD.blip.animate({
		properties: { scale: 1, opacity: 1.0},
		time: 500,
		curve: "ease-in-out"
	})
})
 
utils.delay(300, function(){
	PSD.map.animate({
		properties: { opacity: 0.8 },
		time: 500,
		curve: "ease-in-out"
	})	
})
// Starting Values
PSD.first.opacity = 0;
PSD.second.opacity = 0;
PSD.third.opacity = 0;
PSD.fourth.opacity = 0;

PSD.macbook.opacity = 0; 
PSD.ipad.opacity = 0; 
PSD.android.opacity = 0; 


// Ending opacity value
var opacity = 1

// Animate Devices 
function animateMacbook() {
	PSD.macbook.animate({
		properties: {opacity: opacity},
	})
}

function animateIpad() {
	PSD.ipad.animate({
		properties: {opacity: opacity}
	})
}

function animateAndroid() {
	PSD.android.animate({
		properties: {opacity: opacity}
	})	
}

// Animate Pulse
function pulseIn() {		
	var pulses = [PSD.first, PSD.second, PSD.third, PSD.fourth]; 
	for(var i = 0; i < pulses.length; i++) {
		(function(i){
			window.setTimeout(function(){
				pulses[i].animate({				
					properties: { opacity: 0.7},
					time: 300 
				})
			}, i * 125);
		}(i)); 
	}
}

function pulseOut() {		
	var pulses = [PSD.first, PSD.second, PSD.third, PSD.fourth]; 
	for(var i = 0; i < pulses.length; i++) {
		(function(i){
			window.setTimeout(function(){
				pulses[i].animate({				
					properties: { opacity: 0},
					time: 300
				})
			}, i * 125);
		}(i)); 
	}
}

// Call Functions
utils.delay(2500, animateMacbook)
utils.delay(3000, animateIpad)
utils.delay(3500, animateAndroid)

utils.interval(1000, pulseIn);
utils.interval(1000, function(){
	utils.delay(125, pulseOut); 
});

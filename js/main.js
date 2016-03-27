$(function(){
	console.log("loads this")
	
	intro('.network-security');
	
	$(".slide-right").on("click", function(){
		var zoomOut = new TimelineMax()
			.fromTo(".circular-container", .5, {opacity: 1, scale: 1}, {opacity: 0, scale: 20})
			.to('.network-security .box-container', .5, {scale: 4, opacity: 0}, "0.1")
			.set(".smart-lock", {css: {className: "+=active"}})
			//.fromTo(".smart-lock", .5, {scale: .3}, {scale: 1} , ".5")
			.set(".network-security", {css: {className: "-=active"}})
		
		zoomOut.eventCallback('onComplete', intro, [".smart-lock"]);
	});

});

function intro( sectionClassName ){
	console.log("sectionClassName " + sectionClassName )
	var introRight = new TimelineMax()
			.from(sectionClassName + " .colored-box", .5, {opacity: 0, width: 0, x: "-100%"})
			.from(sectionClassName + " .transparent-box", .5, {opacity: 0, width: 0, x: "-100%"}, "0.1")
			.from(sectionClassName + " " + ".light-colored-box", .5, {opacity: 0, width: 0, x: "-100%"},"0.2")
			.from(sectionClassName + " " +".image-bg", .5, {opacity: 0, width: 0, x: "-100%", transformOrigin: "right"},"0.3")
			.from(sectionClassName + " " +".image-icon", .7, {opacity: 0, transform: "rotateY(90deg)"}, "0.4")
			.from(sectionClassName + " " + ".big-number", .5, {opacity: 0, letterSpacing:"-10px", x: "-100%"}, "0.4")
			.from(sectionClassName + " " + ".right-line", .2, {height: 0}, .4)
			.from(sectionClassName + " " + ".bottom-line", .2, {width: 0}, .6)
			.from(sectionClassName + " " + ".left-line", .2, {height: 0}, .8)
			.from(sectionClassName + " " + ".top-line", .2, {width: 0}, 1)
			.from(sectionClassName + " " + ".section-subtitle", .3, {opacity: 0, x: "-50%"}, "0.8")
			.from(sectionClassName + " " + ".section-title", .5, {opacity: 0, letterSpacing:"-10px", x: "-50%"}, "0.8");

	var clearCircle = TweenLite.set('.circular-container', {clearProps: "all"});
}
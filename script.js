let timeline = gsap.timeline({});

timeline
.from("#nav img, #nav h3, #nav h4 , #nav button",{
		duration: 1,
		opacity: 0,
		y: -100,
		stagger: 0.2,
})
.from("#content h1",{
		duration: 1,
		opacity: 0,
		y: 100,
		stagger: 0.2,
})
.from("h5",{
	duration:0.8,
	opacity:0,
	y:30,
	repeat: -1,
	yoyo: true,
})
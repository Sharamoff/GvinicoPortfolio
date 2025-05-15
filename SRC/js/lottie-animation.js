import {DotLottie} from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const animations = {
	'hdr-logo-lottie': new DotLottie({
		autoplay: true,
		loop: true,
		canvas: document.querySelector('#hdr-logo-lottie'),
		src: "animation/hdr-logo.lottie"
	}),
	'hdr-illustration-lottie': new DotLottie({
		autoplay: true,
		loop: true,
		canvas: document.querySelector('#hdr-illustration-lottie'),
		src: "animation/hdr-illustration.lottie"
	}),
	'hdr-map-lottie': new DotLottie({
		autoplay: true,
		loop: true,
		canvas: document.querySelector('#hdr-map-lottie'),
		src: "animation/hdr-logo.lottie"
	})
};

const timeouts = {};

const restartAnimation = (animationId) => {
	const animation = animations[animationId];
	clearTimeout(timeouts[animationId]);
	timeouts[animationId] = setTimeout(() => {
		animation.stop();
		animation.setFrame(0); // all section animations will be set to frame 370 (this is beginning of end animation)
		animation.play();
	}, 200);
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		const section = entry.target;
		const canvas = section.querySelector('canvas');
		if (!canvas) return;
		const animationId = canvas.id;
		if (entry.isIntersecting) {
			restartAnimation(animationId);
		}
	});
}, {
	root: null,
	rootMargin: '0px',
	threshold: 0.1
});

const sections = document.querySelectorAll('.content');
sections.forEach(section => observer.observe(section));

Object.keys(animations).forEach(animationId => {
	const canvas = document.querySelector(`#${animationId}`);
	/*
	canvas.addEventListener('click', () => {
		restartAnimation(animationId);
	});
	*/
});

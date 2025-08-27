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
		src: "animation/hdr-map.lottie"
	}),
	'hdr-schemes-lottie': new DotLottie({
		autoplay: true,
		loop: true,
		canvas: document.querySelector('#hdr-schemes-lottie'),
		src: "animation/hdr-schemes.lottie"
	})
	,
	'hdr-socialmedia-lottie': new DotLottie({
		autoplay: true,
		loop: true,
		canvas: document.querySelector('#hdr-socialmedia-lottie'),
		src: "animation/hdr-socialmedia.lottie"
	})
};
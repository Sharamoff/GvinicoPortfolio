// function.js
new WOW().init();

document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('.content');
	let currentSectionIndex = 0;
	let isScrolling = false;
	const scrollDelay = 1000;
	
	function isMobileDevice() {
		return window.innerWidth <= 576 && window.innerHeight <= 576;
	}
	
	function scrollToSection(index) {
		if (index >= 0 && index < sections.length) {
			currentSectionIndex = index;
			sections[index].scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
	
	function handleScroll(direction) {
		if (isScrolling || isMobileDevice()) return;
		isScrolling = true;
		
		const newIndex = direction === 'down'
			? Math.min(currentSectionIndex + 1, sections.length - 1)
			: Math.max(currentSectionIndex - 1, 0);
		
		scrollToSection(newIndex);
		
		setTimeout(() => {
			isScrolling = false;
		}, scrollDelay);
	}
	
	function handleWheel(e) {
		if (isMobileDevice()) return;
		e.preventDefault();
		handleScroll(e.deltaY > 0 ? 'down' : 'up');
	}
	
	// Инициализация обработчиков
	function initializeHandlers() {
		if (!isMobileDevice()) {
			document.addEventListener('wheel', handleWheel, { passive: false });
		}
	}
	
	document.addEventListener('keydown', (e) => {
		if (isMobileDevice()) return;
		switch (e.key) {
			case 'ArrowDown':
			case 'PageDown':
				e.preventDefault();
				handleScroll('down');
				break;
			case 'ArrowUp':
			case 'PageUp':
				e.preventDefault();
				handleScroll('up');
				break;
		}
	});
	
	
	// Инициализация при загрузке
	initializeHandlers();
	
	// Отслеживание изменения размера окна
	window.addEventListener('resize', () => {
		initializeHandlers();
	});
});
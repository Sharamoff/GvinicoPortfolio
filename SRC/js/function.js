new WOW().init();

document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('.content');
	let currentSectionIndex = 0;
	let isScrolling = false;
	const scrollDelay = 1000;
	
	function handleWheel(e) {
		e.preventDefault();
		if (isScrolling) return;
		isScrolling = true;
		if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
			currentSectionIndex++;
		} else if (e.deltaY < 0 && currentSectionIndex > 0) {
			currentSectionIndex--;
		}
		sections[currentSectionIndex].scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		setTimeout(() => {
			isScrolling = false;
		}, scrollDelay);
	}
	
	document.addEventListener('wheel', handleWheel, { passive: false });
	
	document.addEventListener('keydown', (e) => {
		if (isScrolling) return;
		if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
			e.preventDefault();
			isScrolling = true;
			currentSectionIndex++;
			sections[currentSectionIndex].scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		} else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
			e.preventDefault();
			isScrolling = true;
			currentSectionIndex--;
			sections[currentSectionIndex].scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
		setTimeout(() => {
			isScrolling = false;
		}, scrollDelay);
	});
	
});

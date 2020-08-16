window.addEventListener('load', (e) => {
	const imgBtn = document.getElementById('logo');
	const contentToHide = document.getElementById('nav-content');

	imgBtn.addEventListener('click', (e) => {
		if (contentToHide.classList.contains('navigation__items--show')) {
			contentToHide.classList.remove('navigation__items--show');
		} else {
			contentToHide.classList.add('navigation__items--show');
		}
	});
});

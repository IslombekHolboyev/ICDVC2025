document.addEventListener("DOMContentLoaded", function () {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.header__list');

	// Открыть/закрыть меню при клике на бургер
	burger.addEventListener('click', (e) => {
		e.stopPropagation(); // чтобы клик не улетел на document
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});

	// Закрывать меню при клике на ссылку
	document.querySelectorAll(".header__list a").forEach(link => {
		link.addEventListener("click", () => {
			burger.classList.remove("active");
			menu.classList.remove("active");
		});
	});

	// Клик вне меню — закрыть меню
	document.addEventListener('click', (e) => {
		if (
			menu.classList.contains('active') && 
			!menu.contains(e.target) && 
			!burger.contains(e.target)
		) {
			burger.classList.remove('active');
			menu.classList.remove('active');
		}
	});
});

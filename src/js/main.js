const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const year = document.querySelector('.footer__year');

console.log(burgerBtn.lastElementChild);


const handleBurgerAnim = () => {
	burgerBtn.lastElementChild.classList.toggle('animBurger')

}

const handleNav = () => {
	nav.classList.toggle('nav--open');
	handleBurgerAnim()
};

const handleYear = () => {
	const currentYear = new Date();

	year.textContent = currentYear.getFullYear();
};

burgerBtn.addEventListener('click', handleNav);
navLinks.forEach((link) => {
	link.addEventListener('click', handleNav);
});
document.addEventListener('DOMContentLoaded', handleYear);

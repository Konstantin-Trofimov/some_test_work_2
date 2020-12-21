'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const skills = document.querySelectorAll('.skills__item-cbx'),
		out = document.querySelector('.meter__result');
	let counter = 0;
	

	const movingArrow = () => {
		const arrow = document.querySelector('.meter__counter-arrow'),
			value = counter / 71.55;

		arrow.style.transform = `rotate(${value - 14}deg)`;
	}

	const amimateOutput = () => {
		const shift = 106;

		const timer = () => {
			const amimate = setTimeout(() => {
				let currentValue = +document.querySelector('.meter__result').textContent;
					
				if (counter > currentValue) {
					if (currentValue <= counter) {
						out.innerHTML = currentValue + shift;
						timer();
					}
					else {
						clearTimeout(amimate);
					}
				} else if (counter < currentValue) {
					if (currentValue >= counter) {
						out.innerHTML = currentValue - shift;
						timer();
					}
					else {
						clearTimeout(amimate);
					}
				}
			}, 100);
		}

		timer();
	}

	
	skills.forEach(elem => {
		const shift = 954;

		if (elem.checked) {
			counter += shift;
		}
		elem.addEventListener('change', () => {
			if (elem.checked) {
				counter += shift;
			} else {
				counter -= shift;
			}
			amimateOutput();
			movingArrow();
		})
		
		movingArrow();
		out.innerHTML = counter;
	});
});

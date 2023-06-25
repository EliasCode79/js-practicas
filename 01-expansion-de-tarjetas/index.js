const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
	console.log('se ejecuto');
	panel.addEventListener('click', () => {
		removeActiveClass();
		panel.classList.add('active');
	});
});

const removeActiveClass = () => {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
};

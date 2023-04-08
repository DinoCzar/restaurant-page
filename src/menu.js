function populateMenu() {
	const menuPage = document.createElement('div');
	menuPage.setAttribute('id', 'menu-page');

	const menuItem = document.createElement('div');
	menuItem.setAttribute('id', 'menu-item');
	menuPage.appendChild(menuItem);
	menuItem.textContent = 'menu item';

	return menuPage;
}

export default populateMenu;

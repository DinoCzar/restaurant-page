function populateMenu() {
	const menuPage = document.createElement('div');
	menuPage.setAttribute('id', 'menu-page');

	const menuFactory = (item, details) => {
		const generateMenuItem = () => {
			const menuItem = document.createElement('div');
			menuItem.setAttribute('id', 'menu-item');
			menuPage.appendChild(menuItem);

			const itemTitle = document.createElement('div');
			itemTitle.setAttribute('id', 'item-title');
			menuItem.appendChild(itemTitle);
			itemTitle.textContent = item;

			const itemDetails = document.createElement('div');
			itemDetails.setAttribute('id', 'item-details');
			menuItem.appendChild(itemDetails);
			itemDetails.textContent = details;
		};

		return { item, details, generateMenuItem };
	};

	const nasigoreng = menuFactory(
		'Nasi Goreng',
		'delicious fried rice with egg'
	);

	const friedrice = menuFactory(
		'Fried rice',
		'yummy rice'
	);

	nasigoreng.generateMenuItem();
	friedrice.generateMenuItem();

	return menuPage;
}

export default populateMenu;

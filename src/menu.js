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

	const menuItem1 = menuFactory(
		'Nasi Goreng',
		'fried rice dish made with steamed rice stir-fried with kecap manis, sambal, shrimp paste, garlic, onion, vegetables, and chicken'
	);

	const menuItem2 = menuFactory(
		'Nasi Campur',
		'grilled chicken, spicy beef rendang, fried tempeh, stir-fried kangkung, sambal, and a refreshing salad'
	);

	const menuItem3 = menuFactory(
		'Pempek Telor',
		'fried fish cakes made from a mixture of fish and tapioca starch, stuffed with a boiled egg, and served with a tangy vinegar-based dipping sauce and sprinkled with chopped cucumber and shallots'
	);

	const menuItem4 = menuFactory(
		'Sayur Lodeh',
		'coconut milk-based vegetable stew featuring a medley of fresh vegetables such as eggplant, green beans, and cabbage, simmered in a fragrant broth of lemongrass, galangal, and turmeric, and served with steamed rice'
	);

	const menuItem5 = menuFactory(
		'Mie Ayam Bakso',
		'egg noodles served with slices of tender chicken, meatballs, crispy fried shallots, and scallions, all in a savory chicken broth'
	);

	menuItem1.generateMenuItem();
	menuItem2.generateMenuItem();
	menuItem3.generateMenuItem();
	menuItem4.generateMenuItem();
	menuItem5.generateMenuItem();

	return menuPage;
}

export default populateMenu;

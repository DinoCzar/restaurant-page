function populateContact() {
	const contactPage = document.createElement('div');
	contactPage.setAttribute('id', 'home-page');

	const restaurantName = document.createElement('div');
	restaurantName.setAttribute('id', 'restaurant-name');
	contactPage.appendChild(restaurantName);
	restaurantName.textContent = 'Java Spice';

	const imageContainer = document.createElement('div');
	imageContainer.setAttribute('id', 'image-container');
	contactPage.appendChild(imageContainer);

	const homeImage = document.createElement('img');
	homeImage.src = 'nasi-goreng.jpg';
	homeImage.setAttribute('id', 'home-image');
	imageContainer.appendChild(homeImage);

	const contactInfo = document.createElement('div');
	contactInfo.setAttribute('id', 'contact-info');
	contactPage.appendChild(contactInfo);

	const address = document.createElement('div');
	address.setAttribute('id', 'address');
	contactInfo.appendChild(address);
	address.textContent = '1234 Delicious Ln Irvine CA 92618';

	const phone = document.createElement('div');
	phone.setAttribute('id', 'phone');
	contactInfo.appendChild(phone);
	phone.textContent = '(123)456-7890';

	return contactPage;
}

export default populateContact;

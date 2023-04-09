function populateHome() {
	const homePage = document.createElement('div');
	homePage.setAttribute('id', 'home-page');
	content.appendChild(homePage);

	const restaurantName = document.createElement('div');
	restaurantName.setAttribute('id', 'restaurant-name');
	homePage.appendChild(restaurantName);
	restaurantName.textContent = 'Java Spice';

	const imageContainer = document.createElement('div');
	imageContainer.setAttribute('id', 'image-container');
	homePage.appendChild(imageContainer);

	const homeImage = document.createElement('img');
	homeImage.src = 'nasi-goreng.jpg';
	homeImage.setAttribute('id', 'home-image');
	imageContainer.appendChild(homeImage);

	const description = document.createElement('div');
	description.setAttribute('id', 'description');
	homePage.appendChild(description);
	description.textContent =
		'We are an indonesian restaurant that has been in business since 2001. We pride ourselves in serving the most authentic and delicious creations from our home town, Denpasar, Bali. We always cook with love, and are excited to share some of our unique spices with you!';
	return homePage;
}

export default populateHome;

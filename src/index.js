const content = document.getElementById('content');

const header = document.createElement('div');
header.setAttribute('id', 'header');
content.appendChild(header);

const homeDiv = document.createElement('div');
homeDiv.setAttribute('id', 'home-div');
header.appendChild(homeDiv);

const menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menu-div');
header.appendChild(menuDiv);

const contactDiv = document.createElement('div');
contactDiv.setAttribute('id', 'contact-div');
header.appendChild(contactDiv);

const home = document.createElement('button');
home.setAttribute('id', 'home');
home.classList.add('button');
homeDiv.appendChild(home);
home.textContent = 'Home';

const menu = document.createElement('button');
menu.setAttribute('id', 'menu');
menu.classList.add('button');
menuDiv.appendChild(menu);
menu.textContent = 'Menu';

const contact = document.createElement('button');
contact.setAttribute('id', 'contact');
contact.classList.add('button');
contactDiv.appendChild(contact);
contact.textContent = 'Contact';

const restaurantName = document.createElement('div');
restaurantName.setAttribute('id', 'restaurant-name');
content.appendChild(restaurantName);
restaurantName.textContent = 'Java Spice';

const imageContainer = document.createElement('div');
imageContainer.setAttribute('id', 'image-container');
content.appendChild(imageContainer);
imageContainer.textContent = 'image here';

const description = document.createElement('div');
description.setAttribute('id', 'description');
content.appendChild(description);
description.textContent =
	'We are an indonesian restuarant that has been in business since 2001. We pride ourselves in serving the most authentic and delicious creations from our home town, Denpasar, Bali. We always cook with love, and are excited to share some of our unique spices with you!';

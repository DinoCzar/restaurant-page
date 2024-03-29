import populateHome from './home';
import populateMenu from './menu';
import populateContact from './contact';
import { remove } from 'lodash';

const loadHome = populateHome();
const loadMenu = populateMenu();
const loadContact = populateContact();

function populateHeader() {
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
	home.addEventListener('click', (e) => {
		loadMenu.remove();
		loadContact.remove();
		content.appendChild(loadHome);
	});

	const menu = document.createElement('button');
	menu.setAttribute('id', 'menu');
	menu.classList.add('button');
	menuDiv.appendChild(menu);
	menu.textContent = 'Menu';
	menu.addEventListener('click', (e) => {
		loadHome.remove();
		loadContact.remove();
		content.appendChild(loadMenu);
	});

	const contact = document.createElement('button');
	contact.setAttribute('id', 'contact');
	contact.classList.add('button');
	contactDiv.appendChild(contact);
	contact.textContent = 'Contact';
	contact.addEventListener('click', (e) => {
		loadHome.remove();
		loadMenu.remove();
		content.appendChild(loadContact);
	});
}

populateHeader();

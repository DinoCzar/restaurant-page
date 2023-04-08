function populateContact() {
	const contactPage = document.createElement('div');
	contactPage.setAttribute('id', 'contact-page');

	const contactInfo = document.createElement('div');
	contactInfo.setAttribute('id', 'contact-info');
	contactPage.appendChild(contactInfo);
	contactInfo.textContent = 'contact info';

	return contactPage;
}

export default populateContact;
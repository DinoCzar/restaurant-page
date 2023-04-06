const content = document.getElementById('content');

const test = document.createElement('div');
test.classList.add('test');
test.textContent = 'Hello, Mars!';
content.appendChild(test);

const yes = document.createElement('div');
yes.classList.add('test');
yes.textContent = 'Hello, Saturn!';
content.appendChild(yes);

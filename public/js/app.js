const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');
const weatherIcon = document.querySelector('#weatherIcon');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    search.value = '';

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    weatherIcon.src = '/img/spinner.gif';

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
                weatherIcon.src = data.forecastIcon;
            }
        })
    }).catch((reject) => {});
});
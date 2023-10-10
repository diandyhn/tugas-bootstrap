const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(sky.jpg)'

searchButton.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                let result = document.querySelector('.result')

                let card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('card1');
                card.classList.add('card2');
                card.innerHTML = `<h2 style="margin-bottom: 15px;">Results for: ${response.name}, ${response.sys.country}</h2>`;
                result.appendChild(card);

                let card1 = document.createElement('div');
                card1.classList.add('card');
                card1.classList.add('card1'); 
                card1.classList.add('card2'); 
                card1.innerHTML = `<h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>`;
                result.appendChild(card1);

                let card2 = document.createElement('div');
                card2.classList.add('card');
                card2.classList.add('card1'); 
                card2.classList.add('card2'); 
                card2.innerHTML = `<h5>Additional Information</h5>
                                <p style="margin-bottom: 17px;">Wind Speed : ${response.wind.speed} m/s</p>
                                <p style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</p>
                                <p style="margin-bottom: 17px;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</p>`;
                result.appendChild(card2);
            } else {
                console.error('Gagal memuat data cuaca.');
            }
        }
    };

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${inputKeyword.value}&appid=8c8ac5da005537ab7a8384e32b8c8a25&units=metric`, true);
    xhr.send();

    inputKeyword.value = null;
});

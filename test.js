const APIKey = '9d739d75001c30e671b98be136e5ba3d'
const url = 'https://api.openweathermap.org/data/2.5/'

const search = document.querySelector('.search-box button');

search.addEventListener('click', () => {


    const city = document.querySelector('.search-box input').value;
    console.log(city);
    let query = `${url}weather?q=${city}&appid=${APIKey}&units=metric&lang=tr`
    console.log(query);
})
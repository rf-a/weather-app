const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    console.log(city);

    const cityDetail = await getCity(city);
    const cityWeather = await getWeather(cityDetail.Key);

    return { cityDetail, cityWeather };
};

cityForm.addEventListener('submit', e => {
    // Stop default action.
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});
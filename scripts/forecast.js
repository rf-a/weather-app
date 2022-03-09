class Forecast {
    constructor() {
        this.key = 'havGBfnROcJjNYNUx2VhTJB7gy3yhP0z';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
    }

    async updateCity(city) {
        const cityDetail = await this.getCity(city);
        const cityWeather = await this.getWeather(cityDetail.Key);
        return { cityDetail, cityWeather };
    };

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}
import convert from 'convert-units';
import { SUN } from './../constants/weathers';

const getTemp = kelvin => {
    return convert(kelvin).from('K').to('C').toFixed(1);
}

const getWeatherState = weather => {
    return SUN;
}

const transformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = getWeatherState(this.weather);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: speed
    };

    return data;
}

export default transformWeather;
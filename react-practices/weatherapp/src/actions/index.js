import getAPIEndPoint from './../api/config';
import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

export const setCity = payload => ({ type: SET_CITY, payload}); //Action creator
export const setForecastDAta = payload => ({ type: SET_FORECAST_DATA, payload}); //Action creator

export const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload}); //Action creator
export const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload}); //Action creator

export const setSelectedCity = payload => {
    return dispatch => {
        const api_forecast = getAPIEndPoint('forecast', payload);
        
        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        return fetch(api_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                //modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastDAta({city: payload, forecastData}));
            }
        ).catch((err) => {
            
        });
    };
}

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city))
            
            const api_weather = getAPIEndPoint('weather' ,city);
            fetch(api_weather)
            .then(data => {
                return data.json();
            })
            .then(weatherData => {
                const weather = transformWeather(weatherData);
                dispatch(setWeatherCity({city, weather}))
            });
        })
    }
}
import getAPIEndPoint from './../api/config';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = payload => ({ type: SET_CITY, payload}); //Action creator
export const setForecastDAta = payload => ({ type: SET_FORECAST_DATA, payload}); //Action creator

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
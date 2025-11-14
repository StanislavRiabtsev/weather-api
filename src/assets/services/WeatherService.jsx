import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const _apiBase = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    const _apiKey = 'key=LGGLQ5JD3SXWGFY4BFSK2F3LK';

    const getPoznanWeather = async (address = 'Poznan,PL') => {
        const res = await request(`${_apiBase}${address}?unitGroup=metric&${_apiKey}`);
        const transformed = _transformWeather(res);
        return transformed;
    };

    const getTimeWeather = async (hours) => {
        const res = await request(`${_apiBase}${hours}?unitGroup=metric&${_apiKey}`);
        const transformed = _transformTimeWeather(res);
        return transformed;
    };

    const _transformTimeWeather = (data) => {
        const today = data.days[0];
        return {
            time: today.datetime,
            temperature: today.temp,
            condition: today.conditions,
        }
    }


    const _transformWeather = (data) => {
        const today = data.days[0];
        return {
            address: data.resolvedAddress,
            feelslike: today.feelslike,
            rain: today.precip,
            windspeed: today.windspeed,
            humidity: today.humidity,
            visibility: today.visibility,
            uvindex: today.uvindex,
            temperature: today.temp,
            condition: today.conditions,
        }
    }
    return {
        process,
        setProcess,
        getPoznanWeather,
        getTimeWeather,
        clearError,
    }
}

export default useWeatherService;
import { useHttp } from "../hooks/http.hook";

const useWeatherService = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const _apiBase = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    const _apiKey = 'key=LGGLQ5JD3SXWGFY4BFSK2F3LK';

    const getPoznanWeather = async (address = 'Poznan,PL') => {
        const res = await request(`${_apiBase}${address}?${_apiKey}`);
        const transformed = _transformWeather(res);
        return transformed;
    };



    const _transformWeather = (data) => {
        const today = data.days[0];
        return {
            address: data.resolvedAddress,
            feelslike: today.feelslike,
            windspeed: today.windspeed,
            humidity: today.humidity,
            visibility: today.visibility,
            uvindex: today.uvindex
        }
    }
    return {
        process,
        setProcess,
        getPoznanWeather,
        clearError,
    }
}

export default useWeatherService;

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Poznan,PL/2025-11-12/2025-11-13?key=LGGLQ5JD3SXWGFY4BFSK2F3LK
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

    const getTimeWeather = async (address = 'Poznan,PL', hours = 'next10hours') => {
        const res = await request(`${_apiBase}${address}/${hours}?unitGroup=metric&${_apiKey}`);
        const transformed = _transformTimeWeather(res);
        return transformed;
    };

    const _transformTimeWeather = (data) => {
        return data.days[0].hours
            .slice(0, 10)
            .map(hour => ({
                time: hour.datetime.slice(0, 5),
                temperature: hour.temp,
                condition: hour.conditions,
            }));
    };


    const _transformWeather = (data) => {
        const today = data.days[0];
        return {
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
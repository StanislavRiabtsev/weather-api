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

    const getForecastWeather = async (address = 'Poznan,PL', days = 'next7days') => {
        const res = await request(`${_apiBase}${address}/${days}?unitGroup=metric&${_apiKey}`);
        const transformed = _transformForecastWeather(res);
        return transformed;
    };



    const _transformTimeWeather = (data) => {

        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Warsaw",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });

        const formatted = formatter.format(Date.now());
        const currentHour = parseInt(formatted.slice(0, 2));

        console.log("Current hour in Poland:", currentHour);

        let hoursToday = data.days[0].hours;
        let hoursTomorrow = data.days[1]?.hours || [];

        let startIndex = hoursToday.findIndex(h => {
            return parseInt(h.datetime.slice(0, 2)) === currentHour;
        });

        if (startIndex === -1) {
            console.log("Hour not found today, using next day data");
            return hoursTomorrow.slice(0, 10).map(hour => ({
                time: hour.datetime.slice(0, 5),
                temperature: hour.temp,
                condition: hour.conditions,
            }));
        }

        const result = [
            ...hoursToday.slice(startIndex),
            ...hoursTomorrow
        ].slice(0, 10);

        return result.map(hour => ({
            time: hour.datetime.slice(0, 5),
            temperature: hour.temp,
            condition: hour.conditions,
        }));
    };

    const _transformForecastWeather = (data) => {
        const todays = data.days[0];
        return hoursTomorrow.slice(0, 10).map(hour => ({
            day: todays.datetime,
            temperature: todays.temp,
            condition: todays.conditions,
        }));
    }

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
        getForecastWeather,
        clearError,
    }
}

export default useWeatherService;
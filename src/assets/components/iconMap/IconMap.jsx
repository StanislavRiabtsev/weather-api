import ClearDay from "../../resources/icons/ClearDay.jsx";
import ClearNight from "../../resources/icons/ClearNight.jsx";
import Cloudy from "../../resources/icons/Cloudy.jsx";
import CloudyDay from "../../resources/icons/CloudyDay.jsx";
import Fog from "../../resources/icons/Fog.jsx";
import Rain from "../../resources/icons/Rain.jsx";
import Sleet from "../../resources/icons/Sleet.jsx";
import Snow from "../../resources/icons/Snow.jsx";
import Thuderstorm from "../../resources/icons/Thunderstorm.jsx";
import Wind from "../../resources/icons/Wind.jsx";

const iconMap = {
    "Clear": <ClearDay />,
    "Clear day": <ClearDay />,
    "Clear night": <ClearNight />,
    "Partially cloudy": <CloudyDay />,
    "Partly cloudy": <CloudyDay />,
    "Cloudy": <Cloudy />,
    "Overcast": <Cloudy />,
    "Rain": <Rain />,
    "Rain, Partially cloudy": <Rain />,
    "Rain, Overcast": <Rain />,
    "Fog": <Fog />,
    "Snow": <Snow />,
    "Sleet": <Sleet />,
    "Thunderstorm": <Thuderstorm />,
    "Wind": <Wind />,
};

const GetWeatherIcon = (condition) => {
    return iconMap[condition] || <Cloudy />;
};

export default GetWeatherIcon
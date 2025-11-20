import weatherConditions from './json/weatherConditions.json';
import i18n from './i18n';

export const translateCondition = (condition, lang) => {
    const language = lang || i18n.language;
    const map = weatherConditions[language];

    if (Array.isArray(condition)) {
        return condition
            .map(cond => translateCondition(cond, language))
            .join(", ");
    }

    if (map[condition]) return map[condition];

    const condLower = condition.toLowerCase();
    if (condLower.includes("cloud")) return map["Cloudy"];
    if (condLower.includes("rain")) return map["Rain"];
    if (condLower.includes("snow")) return map["Snow"];
    if (condLower.includes("thunder")) return map["Thunderstorm"];
    if (condLower.includes("fog")) return map["Fog"];
    if (condLower.includes("sleet")) return map["Sleet"];
    if (condLower.includes("clear")) return map["Clear"];
    if (condLower.includes("overcast")) return map["Cloudy"];

    return condition;
};

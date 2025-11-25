import dayWeek from './json/dayWeek.json';
import i18n from './i18n';

export const translateDay = (day, lang) => {
    const language = lang || i18n.language;
    const map = dayWeek[language];

    if (Array.isArray(condition)) {
        return day
            .map(cond => translateDay(cond, language))
            .join(", ");
    }

    if (map[day]) return map[day];

    const condLower = day.toLowerCase();
    if (condLower.includes("monday")) return map["Monday"];
    if (condLower.includes("tuesday")) return map["Tuesday"];
    if (condLower.includes("wednesday")) return map["Wednesday"];
    if (condLower.includes("thursday")) return map["Thursday"];
    if (condLower.includes("friday")) return map["Friday"];
    if (condLower.includes("saturday")) return map["Saturday"];
    if (condLower.includes("sunday")) return map["Sunday"];

    return day;
};
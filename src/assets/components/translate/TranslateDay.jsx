import dayWeek from './json/dayWeek.json';
import i18n from './i18n';

export const translateDay = (day, lang) => {
    const language = lang || i18n.language;
    const map = dayWeek[language];

    if (Array.isArray(day)) {
        return day.map(d => translateDay(d, language)).join(", ");
    }

    if (!day) return "";

    const parts = day.split(" ");
    const weekday = parts[0];
    const rest = parts.slice(1).join(" ");

    const weekdayLower = weekday.toLowerCase();

    let translated =
        map[weekday] ||
        map[weekdayLower.charAt(0).toUpperCase() + weekdayLower.slice(1)] || // "monday" → "Monday"
        null;

    if (!translated) {
        if (weekdayLower.includes("monday")) translated = map["Monday"];
        else if (weekdayLower.includes("tuesday")) translated = map["Tuesday"];
        else if (weekdayLower.includes("wednesday")) translated = map["Wednesday"];
        else if (weekdayLower.includes("thursday")) translated = map["Thursday"];
        else if (weekdayLower.includes("friday")) translated = map["Friday"];
        else if (weekdayLower.includes("saturday")) translated = map["Saturday"];
        else if (weekdayLower.includes("sunday")) translated = map["Sunday"];
        else translated = weekday;
    }

    return rest ? `${translated} ${rest}` : translated;
};

import axios from "axios";

const API_KEY = '0ecae7bbd745823e8cfa5a3d7fc7a84a';
const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${weatherUrl}&q=${city},za`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
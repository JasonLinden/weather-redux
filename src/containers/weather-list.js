import React, { Component } from "react";
import { connect } from "react-redux";

import { Chart } from "../components/chart";
import { GoogleMap } from "../components/google-map";

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.id}>
                <td>
                    <GoogleMap
                        lon={lon}
                        lat={lat} />
                </td>
                <td>
                    <Chart
                        color="orange"
                        data={temps} />
                </td>
                <td>
                    <Chart
                        color="green"
                        data={pressure} />
                </td>
                <td>
                    <Chart
                        color="red"
                        data={humidity} />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                            Temperature
                        </th>
                        <th>
                            Pressure
                        </th>
                        <th>
                            Humidity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
}

function mapStateTpProps({ weather }) {
    return {
        weather // <-- key and value are identicle, we can shrink this to just one value. {weather: weather}
    };
}

export default connect(mapStateTpProps)(WeatherList);
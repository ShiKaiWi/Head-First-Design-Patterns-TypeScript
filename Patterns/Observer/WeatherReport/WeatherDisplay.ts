import IObserver from "../IObserver";
import WeatherData from "./WeatherData";

class WeatherDisplay implements IObserver {
    private _id: number;
    private _dataSrc: WeatherData;
    private _temp: number;
    private _humidity: number;
    private _pressure: number;

    constructor(id) {
        this._id = id;
        this._dataSrc = WeatherData.getInstance();
        this._dataSrc.subscribe(this);
    }

    public update([temp, humidity, pressure]) {
        this._temp = temp;
        this._humidity = humidity;
        this._pressure = pressure;
        this.displayData();
    }

    public displayData() {
        console.log(`#Weather-Report#${ new Date(Date.now()).toJSON() }:
        Temperature: ${ this._temp }\t Humidity: ${ this._humidity }\tPressure:${ this._pressure }`);
    }

}

export default WeatherDisplay;

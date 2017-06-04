import IObservable from "../IObservable";
import IObserver from "../IObserver";

class WeatherData implements IObservable {
    public static getInstance() {
        return WeatherData.uniqueData;
    }
    private static uniqueData: WeatherData = new WeatherData();
    private _temp: number;
    private _humidity: number;
    private _pressure: number;
    private _observers: IObserver[] = [];

    private constructor() {
        this._temp = 28;
        this._humidity = 19.9;
        this._pressure = 1.09;
        this._startAutoUpdate();
    }

    get temperature(): string {
        return `${ this._temp } °C`;
    }

    get humidity(): string {
        return `${ this._humidity } %RH`;
    }

    get pressure(): string {
        return `${ this._pressure } atm`;
    }

    /**
     * @override
     */
    public unsubscribe(o: IObserver) {
        const index = this._observers.indexOf(o);
        if (index > -1) {
            this._observers.splice(index);
            return true;
        }
        return false;
    }

    /**
     * @override
     */
    public subscribe(o: IObserver): boolean {
        this._observers.push(o);
        return true;
    }

    private _computeRandomDelta(base: number): number {
        return Math.random() * base * 0.1 * (Math.random() > 0.5 ? -1 : 1);
    }

    private _startAutoUpdate() {
        this._temp += this._computeRandomDelta(this._temp);
        this._pressure += this._computeRandomDelta(this._pressure);
        this._humidity += this._computeRandomDelta(this._humidity);
        this._observers.forEach((o) => o.update([this._temp, this._pressure, this._humidity]));
        setTimeout(() => this._startAutoUpdate(), 1500);
    }
}

export default WeatherData;

import WeatherDisplay from "../../../Patterns/Observer/WeatherReport/WeatherDisplay";

describe("#Observer", () => {
    it("should display weather report continually", (done) => {
        console.log("waitting");
        const wd1 = new WeatherDisplay(1);
        const wd2 = new WeatherDisplay(2);
        setTimeout(() => {
            console.log("waiting over");
            done();
        }, 1000);
    });
});

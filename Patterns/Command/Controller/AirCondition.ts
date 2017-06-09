enum STATE {
    OFF,
    ON,
}

class AirCondition {
    public static STATE_ON = STATE.ON;
    public static STATE_OFF = STATE.OFF;
    public state: STATE;

    constructor() {
        this.state = STATE.OFF;
    }

    public on() {
        this.state = AirCondition.STATE_ON;
    }

    public off() {
        this.state = AirCondition.STATE_OFF;
    }
}

export default AirCondition;

enum STATE {
    OFF,
    ON,
}

class TV {
    public static STATE_ON: STATE.ON;
    public static STATE_OFF: STATE.OFF;
    private state: STATE;
    constructor() {
        this.state = STATE.OFF;
    }

    public on() {
        this.state = TV.STATE_ON;
    }

    public off() {
        this.state = TV.STATE_OFF;
    }
}

export default TV;

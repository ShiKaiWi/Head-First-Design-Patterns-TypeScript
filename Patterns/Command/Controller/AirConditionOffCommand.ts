import AirCondition from "./AirCondition";
import ICommand from "./ICommand";

class AirConditionOffCommand implements ICommand {
    private airCondition: AirCondition;
    constructor(airCondition: AirCondition) {
        this.airCondition = airCondition;
    }

    /**
     * @override
     */
    public execute(): ICommand {
        this.airCondition.off();
        return this;
    }

    /**
     * @override
     */
    public log(): ICommand {
        console.log("AirCondition is OFF");
        return this;
    }
}

export default AirConditionOffCommand;

import AirCondition from "./AirCondition";
import ICommand from "./ICommand";

class AirConditionOnCommand implements ICommand {
    private airCondition: AirCondition;
    constructor(airCondition: AirCondition) {
        this.airCondition = airCondition;
    }

    /**
     * @override
     */
    public execute(): ICommand {
        this.airCondition.on();
        return this;
    }

    /**
     * @override
     */
    public log(): ICommand {
        console.log("AirCondition is ON");
        return this;
    }
}

export default AirConditionOnCommand;

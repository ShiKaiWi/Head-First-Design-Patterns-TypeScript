import AirCondition from "../../../Patterns/Command/Controller/AirCondition";
import AirConditionOffCommand from "../../../Patterns/Command/Controller/AirConditionOffCommand";
import AirConditionOnCommand from "../../../Patterns/Command/Controller/AirConditionOnCommand";
import Controller from "../../../Patterns/Command/Controller/Controller";
import TV from "../../../Patterns/Command/Controller/TV";
import TVOffCommand from "../../../Patterns/Command/Controller/TVOffCommand";
import TVOnCommand from "../../../Patterns/Command/Controller/TVOnCommand";

describe("#Command--Controller", () => {
    it("should print out the command log", (done) => {
        const controller = new Controller();
        const tv = new TV();
        const airC = new AirCondition();
        controller.setCommand(Controller.SLOT_TV, new TVOnCommand(tv), new TVOffCommand(tv));
        controller.setCommand(Controller.SLOT_AIR, new AirConditionOnCommand(airC), new AirConditionOffCommand(airC));
        controller.turnOffAir();
        controller.turnOnAir();
        controller.turnOnTV();
        controller.turnOffTV();
        done();
    });
});

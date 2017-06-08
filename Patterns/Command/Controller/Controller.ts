import ICommand from "./ICommand";
import NoCommand from "./NoCommand";

enum SLOT {
    TV = 0,
    AIR,
}

class Controller {
    public static SLOT_TV: SLOT = SLOT.TV;
    public static SLOT_AIR: SLOT = SLOT.AIR;
    private onCommands: ICommand[];
    private offCommands: ICommand[];
    constructor() {
        this.onCommands = new Array(2).map(() => new NoCommand());
        this.offCommands = new Array(2).map(() => new NoCommand());
    }

    public setCommand(slot: SLOT, onCommand: ICommand, offCommand: ICommand): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public turnOnTV() {
        this.onCommands[Controller.SLOT_TV].execute().log();
    }

    public turnOnAir() {
        this.onCommands[Controller.SLOT_AIR].execute().log();
    }

    public turnOffTV() {
        this.offCommands[Controller.SLOT_TV].execute().log();
    }

    public turnOffAir() {
        this.offCommands[Controller.SLOT_AIR].execute().log();
    }
}

export default Controller;

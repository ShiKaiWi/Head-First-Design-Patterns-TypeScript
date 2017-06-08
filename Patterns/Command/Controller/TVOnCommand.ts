import ICommand from "./ICommand";
import TV from "./TV";

class TVOnCommand implements ICommand {
    private TV: TV;
    constructor(TV: TV) {
        this.TV = TV;
    }

    /**
     * @override
     */
    public execute(): ICommand {
        this.TV.on();
        return this;
    }

    /**
     * @override
     */
    public log(): ICommand {
        console.log("TV is ON");
        return this;
    }
}

export default TVOnCommand;

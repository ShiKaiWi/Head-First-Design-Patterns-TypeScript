import ICommand from "./ICommand";
import TV from "./TV";

class TVOffCommand implements ICommand {
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
        console.log("TV is OFF");
        return this;
    }
}

export default TVOffCommand;

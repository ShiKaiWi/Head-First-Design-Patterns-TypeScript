import ICommand from "./ICommand";

class NoCommand implements ICommand {
    /**
     * @override
     */
    public execute(): ICommand {
        return this;
    }

    /**
     * @override
     */
    public log(): ICommand {
        console.log();
        return this;
    }
}

export default NoCommand;

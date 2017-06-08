interface ICommand {
    execute(): ICommand;
    log(): ICommand;
}

export default ICommand;

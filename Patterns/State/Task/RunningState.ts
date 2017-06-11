import ITaskState from "./ITaskState";
import Task from "./Task";

class RunningState implements ITaskState {
    private task: Task;
    constructor(task: Task) {
        this.task = task;
    }

    public submit(): void {
        console.log("Invalid Action on this state#", this.getDescription());
    }

    public reset(): void {
        this.task.setState(this.task.getPendingState());
    }

    public receiveSubmitResponse(): void {
        console.log("Invalid Action on this state#", this.getDescription());
    }

    public receiveSuccessResponse(): void {
        this.task.setState(this.task.getSuccessState());
    }

    public receiveFailResponse(): void {
        this.task.setState(this.task.getFailState());
    }

    public cancel(): void {
        this.task.setState(this.task.getCancelState());
    }

    public getDescription(): string {
        return "Running";
    }
}

export default RunningState;

import ITaskState from "./ITaskState";
import Task from "./Task";

class CancelState implements ITaskState {
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
        console.log("Invalid Action on this state#", this.getDescription());
    }

    public receiveFailResponse(): void {
        console.log("Invalid Action on this state#", this.getDescription());
    }

    public cancel(): void {
        console.log("Invalid Action on this state#", this.getDescription());
    }

    public getDescription(): string {
        return "Cancelled";
    }
}

export default CancelState;

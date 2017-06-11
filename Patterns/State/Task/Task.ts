import CancelState from "./CancelState";
import FailState from "./FailState";
import ITaskState from "./ITaskState";
import PendingState from "./PendingState";
import RunningState from "./RunningState";
import SubmittingState from "./SubmittingState";
import SuccessState from "./SuccessState";

class Task {
    private pendingState: ITaskState;
    private cancelState: ITaskState;
    private failState: ITaskState;
    private successState: ITaskState;
    private submittingState: ITaskState;
    private runningState: ITaskState;
    private name: string;
    private state: ITaskState;

    constructor(name: string) {
        this.name = name;
        this.pendingState = new PendingState(this);
        this.cancelState = new CancelState(this);
        this.failState = new FailState(this);
        this.successState = new SuccessState(this);
        this.submittingState = new SubmittingState(this);
        this.runningState = new RunningState(this);

        this.state = this.pendingState;
    }

    public setState(state: ITaskState): void {
        this.state = state;
    }

    public submit(): void {
        console.log("before action with state#", this.state.getDescription());
        this.state.submit();
        console.log("after action with state#", this.state.getDescription());
    }

    public reset(): void {
        console.log("before action with state#", this.state.getDescription());
        this.state.reset();
        console.log("after action with state#", this.state.getDescription());
    }

    public receiveSubmitResponse(): void {
        console.log("before action with state#", this.state.getDescription());
        this.state.receiveSubmitResponse();
        console.log("after action with state#", this.state.getDescription());
    }

    public receiveSuccessResponse(): void {
        console.log("before action with state#", this.state.getDescription());
        this.state.receiveSuccessResponse();
        console.log("after action with state#", this.state.getDescription());
    }

    public receiveFailResponse(): void {
        console.log("before action with state#", this.state.getDescription());
        this.state.receiveFailResponse();
        console.log("after action with state#", this.state.getDescription());
    }

    public cancel(): void {
        console.log("before action with state#", this.state.getDescription());
        this.state.cancel();
        console.log("after action with state#", this.state.getDescription());
    }

    public getPendingState(): ITaskState {
        return this.pendingState;
    }

    public getSubmittingState(): ITaskState {
        return this.submittingState;
    }

    public getRunningState(): ITaskState {
        return this.runningState;
    }

    public getSuccessState(): ITaskState {
        return this.successState;
    }

    public getFailState(): ITaskState {
        return this.failState;
    }

    public getCancelState(): ITaskState {
        return this.cancelState;
    }
}

export default Task;

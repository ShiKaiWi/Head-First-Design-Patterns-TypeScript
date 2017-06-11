import Task from "../../../Patterns/State/Task/Task";

describe("#State-Task", () => {
    it("should list the state transformation", (done) => {
        const task: Task = new Task("Test Task");
        task.submit();
        task.receiveSubmitResponse();
        task.receiveSuccessResponse();
        task.reset();
        done();
    });
});


/**
 * pending ===(submit)===> submitting ===(receive response)===> running ===(receive success info)===> successful
 *                                       cancel <===(cancel)==== || (receive failed info)
 *                                                               \/
 *                                                              failed
 *
 * any state ===(reset)===> pending
 */

interface ITaskState {
    submit(): void;
    reset(): void;
    receiveSubmitResponse(): void;
    receiveSuccessResponse(): void;
    receiveFailResponse(): void;
    cancel(): void;
    getDescription(): string;
}

export default ITaskState;

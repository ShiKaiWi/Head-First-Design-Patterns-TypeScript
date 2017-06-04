import IObserver from "./IObserver";

interface IObservable {
    subscribe(O: IObserver): boolean;
    unsubscribe(O: IObserver): boolean;
}

export default IObservable;

import Phone from "./Phone";

class IPhone extends Phone {
    private static _idCounter: number = 0;
    private static _price: number = 5559;
    private static _description: string = "This is iPhone";
    private _id: number;
    constructor(){
        super();
        this._id = IPhone._idCounter;
        IPhone._idCounter += 1;
    }

    public get id(): number {
        return this._id;
    }

    public get cost(): number {
        return IPhone._price;
    }

    public get description(): string {
        return `${ IPhone._description }#${ this._id }`;
    }
}

export default IPhone;

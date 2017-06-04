import Phone from "./Phone";
import PhoneEquipment from "./PhoneEquipment";

class EarPod extends PhoneEquipment {
    private static _price: number = 399;
    private static _description: string = "EarPod";
    private _phone: Phone;
    constructor(phone: Phone) {
        super();
        this._phone = phone;
    }

    public get cost(): number{
        return this._phone.cost + EarPod._price;
    }

    public get description(): string {
        return `${ this._phone.description } with ${ EarPod._description }`;
    }
}

export default EarPod;

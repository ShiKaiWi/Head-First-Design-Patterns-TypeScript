import Phone from "./Phone";
import PhoneEquipment from "./PhoneEquipment";

class PhoneShell extends PhoneEquipment {
    private static _price: number = 199;
    private static _description: string = "PhoneShell";
    private _phone: Phone;
    constructor(phone: Phone) {
        super();
        this._phone = phone;
    }

    public get cost(): number{
        return this._phone.cost + PhoneShell._price;
    }

    public get description(): string {
        return `${ this._phone.description } with ${ PhoneShell._description }`;
    }
}

export default PhoneShell;

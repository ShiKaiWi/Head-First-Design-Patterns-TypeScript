import EquipmentFactory from "./EquipmentFactory";
import PhoneType from "./PhoneType";

abstract class Phone {
    private _phoneType: PhoneType;
    private _equipmentFactory: EquipmentFactory;
    constructor(equipmentFactory: EquipmentFactory) {
        this._equipmentFactory = equipmentFactory;
    }
    public abstract start(): void;
    public abstract display(): void;
    public abstract sold(): void;
}

export default Phone;

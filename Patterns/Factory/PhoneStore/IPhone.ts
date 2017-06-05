import EquipmentFactory from "./EquipmentFactory";
import Phone from "./Phone";
import PhoneType from "./PhoneType";

class IPhone extends Phone {
    private type: PhoneType = PhoneType.IPHONE;
    private _earPhone: string;
    private _battery: string;
    private _camera: string;

    constructor(equipmentFactory: EquipmentFactory) {
        super(equipmentFactory);
        this._earPhone = equipmentFactory.createEarPhone();
        this._battery = equipmentFactory.createBattery();
        this._camera = equipmentFactory.createCamera();
    }

    public start() {
        console.log("iPhone will start");
    }

    public display() {
        console.log(`iPhone is displaying itself with
            EarPhone: ${ this._earPhone }
            Camera: ${ this._camera }
            Battery: ${ this._battery }`);
    }

    public sold() {
        console.log("iPhone has been sold");
    }
}

export default IPhone;

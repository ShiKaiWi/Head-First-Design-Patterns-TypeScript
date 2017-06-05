import IPhone from "./IPhone";
import Phone from "./Phone";
import PhoneStore from "./PhoneStore";
import PhoneType from "./PhoneType";
import XIAOMIEquipmentFactory from "./XIAOMIEquipmentFactory";

class IPhoneStore extends PhoneStore {
    protected preparePhone(type: PhoneType): Phone {
        if (type === PhoneType.IPHONE) {
            return new IPhone(new XIAOMIEquipmentFactory());
        }
    }
}

export default IPhoneStore;

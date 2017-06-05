import Phone from "./Phone";
import PhoneType from "./PhoneType";

abstract class PhoneStore {
    public sell(type: PhoneType): void {
        const phone = this.preparePhone(type);
        phone.start();
        phone.display();
        phone.sold();
    }

    protected abstract preparePhone(type: PhoneType): Phone;
}

export default PhoneStore;

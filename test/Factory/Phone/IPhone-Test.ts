import IPhoneStore from "../../../Patterns/Factory/PhoneStore/IPhoneStore";
import PhoneType from "../../../Patterns/Factory/PhoneStore/PhoneType";

describe("#Factory-Phone", () => {
    it("should output IPhone's procedure until sold", () => {
        const ips: IPhoneStore = new IPhoneStore();
        ips.sell(PhoneType.IPHONE);
        return true;
    });
});

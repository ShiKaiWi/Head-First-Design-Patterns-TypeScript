import EarPod from "../../../Patterns/Decorator/Phone/EarPod";
import IPhone from "../../../Patterns/Decorator/Phone/IPhone";
import Phone from "../../../Patterns/Decorator/Phone/Phone";
import PhoneShell from "../../../Patterns/Decorator/Phone/PhoneShell";

describe("#Decorator--Phone", () => {
    it("should show the price and description", () => {
        const iPhone: Phone = new IPhone();
        const iPhoneWithEarPod: Phone = new EarPod(iPhone);
        const iPhoneWithEarPodAndShell: Phone = new PhoneShell(iPhoneWithEarPod);
        console.log(iPhoneWithEarPodAndShell.description, iPhoneWithEarPodAndShell.cost);
        return iPhoneWithEarPodAndShell.cost === 399 + 5559 + 199;
    });
});

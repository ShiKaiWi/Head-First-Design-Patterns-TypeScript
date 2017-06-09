import HKPlug from "./HKPlug";
import IMainlandPlug from "./IMainlandPlug";

class HKPlugAdapter implements IMainlandPlug {
    private hkPlug: HKPlug;
    constructor(plug: HKPlug) {
        this.hkPlug = plug;
    }
    public requirePower(): number {
        const hkVoltage: number = this.hkPlug.needPower();
        if (hkVoltage !== 220) {
            return 220;
        } else {
            return hkVoltage;
        }
    }
}

export default HKPlugAdapter;

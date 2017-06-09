import IMainlandPlug from "./IMainlandPlug";

class XiaoMiPlug implements IMainlandPlug {
    public requirePower(): number {
        return 220;
    }
}

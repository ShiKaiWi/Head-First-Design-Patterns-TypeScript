import IMainlandPlug from "./IMainlandPlug";

class MainlandSocket {
    private static voltage: number = 220;
    public providePower(plug: IMainlandPlug): boolean {
        return plug.requirePower() === MainlandSocket.voltage;
    }
}

export default MainlandSocket;

import assert = require("assert");
import HKPlug from "../../../Patterns/Adapter/Plug/HKPlug";
import HKPlugAdapter from "../../../Patterns/Adapter/Plug/HKPlugAdapter";
import IMainlandPlug from "../../../Patterns/Adapter/Plug/IMainlandPlug";
import MainlandSocket from "../../../Patterns/Adapter/Plug/MainlandSocket";

describe("#Adapter-Plug", () => {
    it("should succeed to adapt hongkong plug to mainland socket", () => {
        const mainlandSocket: MainlandSocket = new MainlandSocket();
        const adaptedHKPlug: IMainlandPlug = new HKPlugAdapter(new HKPlug());
        assert.ok(mainlandSocket.providePower(adaptedHKPlug));
    });
});

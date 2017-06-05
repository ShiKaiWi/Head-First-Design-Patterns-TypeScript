import EquipmentFactory from "./EquipmentFactory";

class XIAOMIEquipmentFactory extends EquipmentFactory {
    public createEarPhone(): string {
        return "XIAOMI EarPhone";
    }
    public createCamera(): string {
        return "XIAOMI Camera";
    }
    public createBattery(): string {
        return "XIAOMI Battery";
    }
}

export default XIAOMIEquipmentFactory;

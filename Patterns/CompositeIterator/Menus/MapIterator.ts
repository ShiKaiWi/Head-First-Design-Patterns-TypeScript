import IIterator from "./IIterator";

class MapIterator implements IIterator {
    private values: any[];
    private len: number;
    private currIndex: number;
    constructor(map: Map<string, any>) {
        this.values = [];
        map.forEach((value) => {
            this.values.push(value);
        });
        this.len = this.values.length;
        this.currIndex = 0;
    }

    public hasNext(): boolean {
        return this.currIndex < this.len;
    }

    public next(): object {
        if (this.hasNext()) {
            this.currIndex ++;
            return this.values[this.currIndex - 1];
        } else {
            return null;
        }
    }
}

export default MapIterator;

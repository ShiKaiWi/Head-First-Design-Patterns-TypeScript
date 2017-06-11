import IIterator from "./IIterator";

class NullIterator implements IIterator {
    public hasNext(): boolean {
        return false;
    }
    public next(): object {
        return null;
    }
}

export default NullIterator;

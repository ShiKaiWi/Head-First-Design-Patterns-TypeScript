import IIterator from "./IIterator";
import MenuComponent from "./MenuComponent";
import NullIterator from "./NullIterator";

class MenuItem extends MenuComponent {
    private name: string;
    constructor(name) {
        super();
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public createIterator(): IIterator {
        return new NullIterator();
    }
}

export default MenuItem;

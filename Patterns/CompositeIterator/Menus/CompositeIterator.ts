import IIterator from "./IIterator";
import Menu from "./Menu";
import MenuComponent from "./MenuComponent";

class CompositeIterator implements IIterator {
    private iteratorStack: IIterator[];

    constructor(it: IIterator) {
        this.iteratorStack = [];
        this.iteratorStack.push(it);
    }

    public next(): MenuComponent {
        if (this.hasNext()) {
            const it = this.iteratorStack[this.iteratorStack.length - 1];
            const menuComponent: MenuComponent = it.next() as MenuComponent;
            if (menuComponent instanceof Menu) {
                this.iteratorStack.push(menuComponent.createIterator());
            }
            return menuComponent;
        } else {
            return null;
        }
    }

    public hasNext(): boolean {
        if (this.iteratorStack.length === 0) {
            return false;
        } else {
            const it = this.iteratorStack[this.iteratorStack.length - 1];
            if (!it.hasNext()) {
                this.iteratorStack.pop();
                return this.hasNext();
            }
            return true;
        }
    }
}

export default CompositeIterator;

import IIterator from "./IIterator";

class MenuComponent {
    public getName(): string {
        throw new Error("Unsupported Operation");
    }

    public getChild(name: string): MenuComponent {
        throw new Error("Unsupported Operation");
    }

    public add(item: MenuComponent): boolean {
        throw new Error("Unsupported Operation");
    }

    public remove(name: string): boolean {
        throw new Error("Unsupported Operation");
    }

    public createIterator(): IIterator {
        throw new Error("Unsupported Operation");
    }
}

export default MenuComponent;

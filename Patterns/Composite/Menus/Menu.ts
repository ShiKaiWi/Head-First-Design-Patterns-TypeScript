import MenuComponent from "./MenuComponent";

class Menu extends MenuComponent {
    private name: string;
    private menuItems: Map<string, MenuComponent>;
    constructor(name) {
        super();
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public add(item: MenuComponent): boolean {
        this.menuItems.set(item.getName(), item);
        return true;
    }

    public remove(name: string): boolean {
        return this.menuItems.delete(name);
    }

    public getChild(name: string): MenuComponent {
        return this.menuItems.get(name);
    }
}

export default Menu;

import MenuComponent from "./MenuComponent";

class MenuItem extends MenuComponent {
    private name: string;
    constructor(name) {
        super();
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

export default MenuItem;
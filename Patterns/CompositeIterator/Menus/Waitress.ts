import IIterator from "./IIterator";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

class Waitress {
    private menu: Menu;
    constructor() {
        this.menu = new Menu("YingYing Restaurant");
        this.menu.add(new MenuItem("Yangzhou rice"));
        const sichuanMenu = new Menu("Sichuan Food");
        sichuanMenu.add(new MenuItem("MapoDoufu"));
        this.menu.add(sichuanMenu);
    }

    public showMenu(): void {
        const it: IIterator = this.menu.createIterator();
        while (it.hasNext()) {
            console.log((it.next() as MenuItem).getName());
        }
    }
}

export default Waitress;

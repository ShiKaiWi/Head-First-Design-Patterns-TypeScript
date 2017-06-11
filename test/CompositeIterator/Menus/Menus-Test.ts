import Waitress from "../../../Patterns/CompositeIterator/Menus/Waitress";

describe("#CompositeAndIterator", () => {
    it("should list the menus", (done) => {
        const waitress = new Waitress();
        waitress.showMenu();
        done();
    });
});

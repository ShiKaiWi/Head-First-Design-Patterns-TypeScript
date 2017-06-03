import Database from "../Singleton/Database";

describe("Singleton-Database", () => {
    let db1: Database;
    let db2: Database;

    beforeEach(() => {
        db1 = Database.getInstance();
        db2 = Database.getInstance();
    });

    describe("#Singleton Database", () => {
        it("should share the same database", () => {
            const helloWorld = "hello,world";
            db1.data = helloWorld;
            if (db2.data !== helloWorld) {
                throw new Error(`Expected db2.data is ${helloWorld} but is ${db2.data}`);
            }
        });
    });
});

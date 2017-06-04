export default class Database {
    public static getInstance(): Database {
        return Database.uniqueDatabase;
    }
    private static uniqueDatabase: Database = new Database();
    private _data: string;
    private constructor() { }

    set data(d: string) {
        this._data = d;
    }

    get data(): string {
        return this._data;
    }
}

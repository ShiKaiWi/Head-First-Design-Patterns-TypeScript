import PlayGame from "./PlayGame";

class PlayDota extends PlayGame {
    /**
     * @override
     */
    protected openClient(): void {
        console.log("I am opening Steam");
    }

    /**
     * @override
     */
    protected playing(): boolean {
        return Math.random() > 0.8;
    }
}

export default PlayDota;

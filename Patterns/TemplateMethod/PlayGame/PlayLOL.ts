import PlayGame from "./PlayGame";

class PlayLOL extends PlayGame {
    /**
     * @override
     */
    protected openClient(): void {
        console.log("I am opening QQ");
    }

    /**
     * @override
     */
    protected playing(): boolean {
        return Math.random() > 0.3;
    }

    /**
     * @override
     */
    protected needPractice(): boolean {
        return true;
    }

    /**
     * @override
     */
    protected practice(): void {
        console.log("I am practicing LOL");
    }
}

export default PlayLOL;

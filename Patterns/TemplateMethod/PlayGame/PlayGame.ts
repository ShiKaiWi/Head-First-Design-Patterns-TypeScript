abstract class PlayGame {
    private gameResult: boolean = false;
    public play(): boolean {
        this.startPC();
        this.openClient();
        if (this.needPractice()) {
            this.practice();
        }
        this.gameResult = this.playing();
        this.endGame();
        return this.gameResult;
    }
    protected abstract openClient(): void;
    protected practice(): void {
        return;
    }
    protected abstract playing(): boolean;
    protected needPractice(): boolean {
        return false;
    }
    private startPC(): void {
        console.log("Start PC");
    }
    private endGame(): void {
        if (this.gameResult) {
            console.log("win the game");
        } else {
            console.log("lose the game");
        }
    }
}

export default PlayGame;

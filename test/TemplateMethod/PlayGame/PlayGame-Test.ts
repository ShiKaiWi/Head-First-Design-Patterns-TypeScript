import PlayDota from "../../../Patterns/TemplateMethod/PlayGame/PlayDota";
import PlayLOL from "../../../Patterns/TemplateMethod/PlayGame/PlayLOL";

describe("#TemplateMethod-PlayGame", () => {
    it("should output game playing info", (done) => {
        const playDota = new PlayDota();
        const playLOL = new PlayLOL();
        while (1) {
            if (playDota.play()) {
                break;
            }
        }
        while (1) {
            if (playLOL.play()) {
                break;
            }
        }
        done();
    });
});

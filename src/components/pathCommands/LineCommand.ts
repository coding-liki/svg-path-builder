import AbstractCommand from "./AbstractCommand";

export default class LineCommand extends AbstractCommand {
    constructor(
        private readonly x?: number,
        private readonly y?: number
    ) {
        super();
    }

    public build = (): string => {
        if (this.x !== undefined && this.y !== undefined) {
            return (this.absolute ? "L" : "l") + " " + this.x + "," + this.y;
        }

        if (this.x !== undefined) {
            return (this.absolute ? "H" : "h") + " " + this.x;
        }

        if (this.y !== undefined) {
            return (this.absolute ? "V" : "v") + " " + this.y;
        }

        return "";
    }
}
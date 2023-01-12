import AbstractCommand from "./AbstractCommand";

export default class MoveCommand extends AbstractCommand {
    constructor(
        private readonly x: number,
        private readonly y: number
    ) {
        super();
    }

    public build = (): string => (this.absolute ? "M" : "m") + " " + this.x + "," + this.y;
}
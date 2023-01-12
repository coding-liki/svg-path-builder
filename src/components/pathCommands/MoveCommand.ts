import AbstractCommand from "./AbstractCommand";

export default class MoveCommand extends AbstractCommand {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }

    public build = (): string => (this.absolute ? "M" : "m") + " " + this.x + "," + this.y;
}
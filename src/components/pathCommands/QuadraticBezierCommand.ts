import AbstractCommand from "./AbstractCommand";

export default class QuadraticBezierCommand extends AbstractCommand {
    private readonly endControlX?: number = undefined;
    private readonly endControlY?: number = undefined;
    private endX: number;
    private endY: number;

    constructor(endX: number, endY: number, endControlX: number | undefined = undefined, endControlY: number | undefined = undefined) {
        super();
        this.endControlX = endControlX;
        this.endControlY = endControlY;
        this.endX = endX;
        this.endY = endY;
    }

    public build = (): string => {
        if (this.endControlX !== undefined && this.endControlY !== undefined) {
            return [
                (this.absolute ? "Q" : "q"),
                [this.endControlX, this.endControlY].join(","),
                [this.endX, this.endY].join(",")
            ].join(" ");
        }

        return [
            (this.absolute ? "T" : "t"),
            [this.endX, this.endY].join(",")
        ].join(" ");
    }
}
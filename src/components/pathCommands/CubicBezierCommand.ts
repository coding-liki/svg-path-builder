import AbstractCommand from "./AbstractCommand";

export default class CubicBezierCommand extends AbstractCommand {
    private readonly startControlX?: number = undefined;
    private readonly startControlY?: number = undefined;
    private endControlX: number;
    private endControlY: number;
    private endX: number;
    private endY: number;

    constructor(endX: number, endY: number, endControlX: number, endControlY: number, startControlX: number | undefined = undefined, startControlY: number | undefined = undefined) {
        super();
        this.startControlX = startControlX;
        this.startControlY = startControlY;
        this.endControlX = endControlX;
        this.endControlY = endControlY;
        this.endX = endX;
        this.endY = endY;
    }

    public build = (): string => {
        if (this.startControlX !== undefined && this.startControlY !== undefined) {
            return [
                (this.absolute ? "C" : "c"),
                [this.startControlX, this.startControlY].join(","),
                [this.endControlX, this.endControlY].join(","),
                [this.endX, this.endY].join(",")
            ].join(" ");
        }

        return [
            (this.absolute ? "S" : "s"),
            [this.endControlX, this.endControlY].join(","),
            [this.endX, this.endY].join(",")
        ].join(" ");
    }

}
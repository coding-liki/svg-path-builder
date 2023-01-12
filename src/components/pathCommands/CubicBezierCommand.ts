import AbstractCommand from "./AbstractCommand";

export default class CubicBezierCommand extends AbstractCommand {
    constructor(
        private endX: number,
        private endY: number,
        private endControlX: number,
        private endControlY: number,
        private readonly startControlX?: number,
        private readonly startControlY?: number
    ) {
        super();
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
import AbstractCommand from "./AbstractCommand";

export default class QuadraticBezierCommand extends AbstractCommand {
    constructor(
        private endX: number,
        private endY: number,
        private readonly endControlX?: number,
        private readonly endControlY?: number
    ) {
        super();
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
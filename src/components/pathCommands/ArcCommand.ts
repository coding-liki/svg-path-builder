import AbstractCommand from "./AbstractCommand";

export enum LARGE_FLAG {
    small,
    large
}

export enum SWEEP_FLAG {
    counterclockwise,
    clockwise
}

export default class ArcCommand extends AbstractCommand {
    constructor(
        private radiusX: number,
        private radiusY: number,
        private angle: number,
        private largeFlag: LARGE_FLAG,
        private sweepFlag: SWEEP_FLAG,
        private x: number,
        private y: number
    ) {
        super();
    }

    public build = (): string => [
        (this.absolute ? "A" : "a"),
        this.radiusX,
        this.radiusY,
        this.angle,
        this.largeFlag,
        this.sweepFlag,
        [this.x, this.y].join(",")
    ].join(" ");
}
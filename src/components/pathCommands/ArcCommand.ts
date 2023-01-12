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
    private radiusX: number;
    private radiusY: number;
    private angle: number;
    private largeFlag: LARGE_FLAG;
    private sweepFlag: SWEEP_FLAG;
    private x: number;
    private y: number;

    constructor(radiusX: number, radiusY: number, angle: number, largeFlag: LARGE_FLAG, sweepFlag: SWEEP_FLAG, x: number, y: number) {
        super();
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.angle = angle;
        this.largeFlag = largeFlag;
        this.sweepFlag = sweepFlag;
        this.x = x;
        this.y = y;
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
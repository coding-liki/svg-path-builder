import {
    ArcCommand,
    CommandInterface,
    CubicBezierCommand,
    LineCommand,
    MoveCommand,
    QuadraticBezierCommand
} from "./pathCommands";
import {LARGE_FLAG, SWEEP_FLAG} from "./pathCommands/ArcCommand";

export default class SvgPathBuilder {
    private isAbsolute: boolean = false;
    private commands: CommandInterface[] = [];

    public absolute = (): SvgPathBuilder => {
        this.isAbsolute = true;

        return this;
    };

    public relative = (): SvgPathBuilder => {
        this.isAbsolute = false;

        return this;
    };

    public build = (): string => this.commands.join(" ").trim();

    public close = (): SvgPathBuilder => {
        this.commands.push(
            new class implements CommandInterface {
                public build = (): string => "z";
                public setAbsolute = (absolute: boolean): CommandInterface => this;
            }
        )

        return this;
    }

    public moveTo = (x: number, y: number): SvgPathBuilder => {
        this.commands.push(
            (new MoveCommand(x, y)).setAbsolute(this.isAbsolute)
        );

        return this;
    };

    public lineTo = (x: number, y: number): SvgPathBuilder => {
        this.commands.push(
            (new LineCommand(x, y)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public vLineTo = (y: number): SvgPathBuilder => {
        this.commands.push(
            (new LineCommand(undefined, y)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public hLineTo = (x: number): SvgPathBuilder => {
        this.commands.push(
            (new LineCommand(x)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public arc = (toX: number, toY: number, radiusX: number, radiusY: number, angle: number, largeFlag: LARGE_FLAG = LARGE_FLAG.small, sweepFlag: SWEEP_FLAG = SWEEP_FLAG.clockwise): SvgPathBuilder => {
        this.commands.push(
            (new ArcCommand(radiusX, radiusY, angle, largeFlag, sweepFlag, toX, toY)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public cBezier = (startControlX: number, startControlY: number, endControlX: number, endControlY: number, endX: number, endY: number): SvgPathBuilder => {
        this.commands.push(
            (new CubicBezierCommand(endX, endY, endControlX, endControlY, startControlX, startControlY)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public sBezier = (endControlX: number, endControlY: number, endX: number, endY: number): SvgPathBuilder => {
        this.commands.push(
            (new CubicBezierCommand(endX, endY, endControlX, endControlY)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public qBezier = (endControlX: number, endControlY: number, endX: number, endY: number): SvgPathBuilder => {
        this.commands.push(
            (new QuadraticBezierCommand(endX, endY, endControlX, endControlY)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public tBezier = (endX: number, endY: number): SvgPathBuilder => {
        this.commands.push(
            (new QuadraticBezierCommand(endX, endY)).setAbsolute(this.isAbsolute)
        );

        return this;
    }

    public circle = (radius: number): SvgPathBuilder =>
        this.relative().moveTo(-radius, 0)
            .arc(radius * 2, 0, radius, radius, 0)
            .arc(-radius * 2, 0, radius, radius, 0);

    public rect = (witdh: number, height: number): SvgPathBuilder =>
        this.relative()
            .hLineTo(witdh)
            .vLineTo(height)
            .hLineTo(-witdh)
            .vLineTo(-height);
};
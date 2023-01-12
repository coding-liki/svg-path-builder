import CommandInterface from "./CommandInterface";

export default abstract class AbstractCommand implements CommandInterface {
    protected absolute: boolean = false;

    public build = (): string => "";

    public setAbsolute = (absolute: boolean): CommandInterface => {
        this.absolute = absolute;
        return this;
    }

    public toString = (): string => this.build();
}
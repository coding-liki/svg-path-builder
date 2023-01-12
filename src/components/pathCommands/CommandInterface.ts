export default interface CommandInterface {
    setAbsolute(absolute: boolean): CommandInterface;

    build(): string;
}
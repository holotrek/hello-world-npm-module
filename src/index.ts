export interface IHelloWorlder {
    sayHi(): string;
}

export class HelloWorlder implements IHelloWorlder {
    public sayHi(): string {
        return "Hello World";
    }
}

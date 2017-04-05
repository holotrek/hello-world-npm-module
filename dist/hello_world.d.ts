// Generated by dts-bundle v0.7.2

declare module 'hello_world' {
    export { HelloEarthService } from 'hello_world/hello-earth.service';
    export { IHelloWorldService } from 'hello_world/hello-world-interface.service';
    export { HelloWorldService } from 'hello_world/hello-world.service';
}

declare module 'hello_world/hello-earth.service' {
    import { IHelloWorldService } from 'hello_world/hello-world-interface.service';
    export class HelloEarthService implements IHelloWorldService {
        sayHi(): string;
    }
    export class MockHelloEarthService extends HelloEarthService implements IHelloWorldService {
    }
}

declare module 'hello_world/hello-world-interface.service' {
    export interface IHelloWorldService {
        sayHi(): string;
    }
}

declare module 'hello_world/hello-world.service' {
    import { IHelloWorldService } from 'hello_world/hello-world-interface.service';
    export class HelloWorldService implements IHelloWorldService {
        sayHi(): string;
    }
    export class MockHelloWorldService extends HelloWorldService implements IHelloWorldService {
    }
}


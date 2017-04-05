import { IHelloWorldService } from './hello-world-interface.service';
import { HelloWorldService } from './hello-world.service';
import { HelloEarthService } from './hello-earth.service';

export class HelloAllService implements IHelloWorldService {
    constructor(
        private helloWorld: HelloWorldService,
        private helloEarth: HelloEarthService
    ) {
    }

    public sayHi(): string {
        return this.helloWorld.sayHi() + '\n' + this.helloEarth.sayHi();
    }
}

export class MockHelloAllService extends HelloAllService implements IHelloWorldService {
}

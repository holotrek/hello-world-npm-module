import { HelloWorldService } from './hello-world.service';

describe('hello-world', () => {
    it('should say hi', () => {
        let hw = new HelloWorldService();
        expect(hw.sayHi()).toBe('Hello World!');
    });
});

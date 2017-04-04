import { HelloEarthService } from '../src/hello-earth.service';

describe('hello-earth', () => {
    it('should say hi', () => {
        let hw = new HelloEarthService();
        expect(hw.sayHi()).toBe('Hello Earth!');
    });
});

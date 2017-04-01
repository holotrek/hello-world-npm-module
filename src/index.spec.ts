import { HelloWorlder } from './';

describe('hello-world', () => {
    it('should say hi', () => {
        let hw = new HelloWorlder();
        expect(hw.sayHi()).toBe('Hello World');
    });
});

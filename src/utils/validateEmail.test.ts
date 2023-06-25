import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
    it('should return true for a valid email', () => {
        expect(validateEmail('sd@df.com')).toBe(true);
    });

    it('should return false for a email not having dot', () => {
        expect(validateEmail('sd@dfcom')).toBe(false);
    });

    it('should return false for a email not having @', () => {
        expect(validateEmail('sddf.com')).toBe(false);
    });
});

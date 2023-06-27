import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
    test('should return true for a valid email', () => {
        expect(validateEmail('sd@df.com')).toBe(true);
    });

    test('should return false for a email not having dot', () => {
        expect(validateEmail('sd@dfcom')).toBe(false);
    });

    test('should return false for a email not having @', () => {
        expect(validateEmail('sddf.com')).toBe(false);
    });
});

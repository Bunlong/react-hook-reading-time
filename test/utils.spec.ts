import expect from 'expect'
import stripTags from '../src/utils/strip-tags';

// eslint-disable-next-line no-undef
describe('Testing utility files & functions', () => {
  describe('strip-tags utility method', () => {
    const testString = '<div>Test string</div>';
    const outputString = 'Test string';
    it('Should be able strip tags', () => {
      expect(stripTags(testString)).toBe(outputString);
    });
  });
})

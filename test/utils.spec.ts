import expect from 'expect'
import convertTimeMinutes from '../src/utils/convert-time-to-minutes';
import convertTimeMinutesText from '../src/utils/convert-time-to-minutes-text';
import readWords, {
  countWords,
  readOtherLanguages,
} from '../src/utils/read-words';
import stripTags from '../src/utils/strip-tags';
import stripWhitespace from '../src/utils/strip-whitespace';

const CHINESE_KOREAN_READ_TIME = 500; // cpm

// eslint-disable-next-line no-undef
describe('Testing utility files & functions', () => {
  describe('convert-time-to-minutes utility method', () => {
    it('Should be returned half minute if time is less than half a minute', () => {
      const testNumber = 0.4;
      const outputNumber = 0.5;
      expect(convertTimeMinutes(testNumber)).toEqual(outputNumber);
    });

    it('Should be returned a minute if time is greater than half a minute', () => {
      const testNumber = 0.6;
      const outputNumber = 1;
      expect(convertTimeMinutes(testNumber)).toEqual(outputNumber);
    });

    it('Should be returned minutes if time is greater than one and a half minutes', () => {
      const testNumber = 12;
      const outputNumber = 12;
      expect(convertTimeMinutes(testNumber)).toEqual(outputNumber);
    });
  });

  describe('convert-time-to-minutes-text utility method', () => {
    it('Should be returned "less than a min" if time is less than half a minute', () => {
      const testNumber = 0.4;
      const outputString = 'less than a min';
      expect(convertTimeMinutesText(testNumber)).toEqual(outputString);
    });

    it('Should be returned "1 min read" if time is greater than half a minute', () => {
      const testNumber = 0.6;
      const outputString = '1 min read';
      expect(convertTimeMinutesText(testNumber)).toEqual(outputString);
    });

    it('Should be returned "xx min read" if time is greater than one and a half minutes', () => {
      const testNumber = 12;
      const outputString = `${testNumber} min read`;
      expect(convertTimeMinutesText(testNumber)).toEqual(outputString);
    });
  });

  describe('read-words utility method', () => {
    it('Should be able to count nil words', () => {
      const testString = '';
      const outputNumber = 0;
      expect(countWords(testString)).toBe(outputNumber);
    });

    it('Should be able to count words count to be 2', () => {
      const testString = 'Test string';
      const outputNumber = 2;
      expect(countWords(testString)).toBe(outputNumber);
    });

    it('Should be able to count other language characters', () => {
      const testString = 'Test string测试字符串';
      const outputString = 'Test string';
      expect(readOtherLanguages(testString)).toEqual({
        count: 5,
        time: 5 / CHINESE_KOREAN_READ_TIME,
        formattedText: outputString,
      });
    });

    it('Should be calculate words read time', () => {
      const testString = 'Test string';
      const outputObject = {
        characters: 0,
        otherLanguageTime: 0,
        words: 2,
        time: 0.007272727272727273
      };
      expect(readWords(testString)).toMatchObject(outputObject);
    });
  });

  describe('strip-tags utility method', () => {
    const testString = '<div>Test string</div>';
    const outputString = 'Test string';
    it('Should be able strip tags', () => {
      expect(stripTags(testString)).toBe(outputString);
    });
  });

  describe('strip-whitespace utility method', () => {
    const testString = '  Test string  ';
    const outputString = 'Test string';
    it('Should be able strip leading or trailing whitespace from a string', () => {
      expect(stripWhitespace(testString)).toBe(outputString);
    });
  });
})

import readWords from './utils/read-words';
import stripTags from './utils/strip-tags';
import stripWhitespace from './utils/strip-whitespace';
import convertTimeMinutesText from './utils/convert-time-to-minutes-text';
import convertTimeMinutes from './utils/convert-time-to-minutes';

export function useReadingTime(text: string): any {
  const strippedString = stripTags(stripWhitespace(text));
  const { time, words } = readWords(strippedString);

  return {
    text: convertTimeMinutesText(time),
    minutes: convertTimeMinutes(time),
    words,
    time,
  };
}

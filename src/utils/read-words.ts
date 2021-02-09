const WORDS_PER_MIN = 275; // wpm
const CHINESE_KOREAN_READ_TIME = 500; // cpm

function countWords(text: string) {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');

  return (text.match(reg) || []).length;
}

// Chinese / Japanese / Korean
function readOtherLanguages(text: string) {
  const pattern =
    '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
  const reg = new RegExp(pattern, 'g');
  const count = (text.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedText = text.replace(reg, '');

  return {
    count,
    time,
    formattedText,
  };
}

function readWords(text: string, wordsPerMin = WORDS_PER_MIN) {
  const {
    count: characters,
    time: otherLanguageTime,
    formattedText,
  } = readOtherLanguages(text);
  const words = countWords(formattedText);
  const time = words / wordsPerMin;

  return {
    characters,
    otherLanguageTime,
    words,
    time,
  };
}

export { countWords, readOtherLanguages };
export default readWords;

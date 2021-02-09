function convertTimeMinutesText(time: number) {
  if (time < 0.5) {
    return 'less than a min';
  }
  if (time >= 0.5 && time < 1.5) {
    return '1 min read';
  }
  return `${Math.ceil(time)} min read`;
}

export default convertTimeMinutesText;

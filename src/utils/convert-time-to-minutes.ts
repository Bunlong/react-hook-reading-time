function convertTimeToMinutes(time: number) {
  if (time < 0.5) {
    return 0.5;
  }
  if (time >= 0.5 && time < 1.5) {
    return 1;
  }
  return Math.ceil(time);
}

export default convertTimeToMinutes;

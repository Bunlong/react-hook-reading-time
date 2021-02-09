import React from 'react';
import { useReadingTime } from "react-hook-reading-time";

function App() {
  const myText = 'When short pieces are well-written and thought provoking, we’ve found that readers will end up spending more time with the piece. And vice versa: if a long piece is filled with fluff, readers simply won’t reach the end. In a world competing for attention, readers spend their limited time where it counts. Longer stories don’t guarantee more reading time. On average, readers actually spend the most time reading mid-length pieces. In addition, half of the earnings model is based on a proportional share. If you write a short piece that is read by people who predominantly read other short pieces (e.g., an audience who reads mostly poetry), then your story will receive a meaningful portion of share earnings. The outcome will be similar to if you’d written a long piece read by people who predominantly read other long pieces.';
  const {
    text,
    minutes,
    words,
    time,
  } = useReadingTime(myText);

  console.log('==============')
  console.log(text)
  console.log(minutes)
  console.log(words)
  console.log(time)
  console.log('==============')

  return (
    <div>
      <p>{myText}</p>
      <p>{text}</p>
    </div>
  );
};

export default App;

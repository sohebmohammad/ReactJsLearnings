import React, { useState } from 'react';

export default function TypingGame() {
  const [started, setStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("Type something...");
  const str="As the morning sun bathed the city in a golden hue, people hurriedly made their way through bustling streets. The aroma of fresh coffee wafted from corner cafes, mingling with the sweet scent of blooming flowers. Each step echoed with the rhythm of urban life, a harmonious blend of diverse stories and ambitions. The cityscape, adorned with towering skyscrapers and historic landmarks, bore witness to the constant ebb and flow of daily existence. Amidst the vibrant tapestry of city living, a sense of possibility lingered in the air, painting a canvas of endless opportunities";
  const [str2,str2Set]=useState("");
  function startGame() {
    setStarted(true);
    setDisplayText("Start typing...");
  }

  function updateInput(e) {
    const valueTyped = e.target.value;
    str2Set(str2 + valueTyped);
    setDisplayText(str2 + valueTyped);
  }

  function endGame() {
    setStarted(false);
    setDisplayText(`You typed: ${str}`);
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Typing Game</h2>
      <h2 style={{ marginLeft: '100px', marginRight: '100px', width: '1400px' }}>{str}</h2>
      <button onClick={startGame} disabled={started} style={{ Align: 'center' }}>
        Start
      </button>
      <br />
      <textarea
        style={{ marginLeft: '100px', marginRight: '100px', width: '1400px', fontSize: '40px' }}
        onChange={updateInput}
        value={inputValue}
        placeholder="Type here..."
      />
      <br />
      <button onClick={endGame} disabled={!started}>
        End
      </button>
      <br />
      <p>{displayText}</p>
    </div>
  );
}

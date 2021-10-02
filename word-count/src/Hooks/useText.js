import { useState, useEffect } from "react";

//custom hooks allow to break down and establish the logic them in a reusable way.
const useText = (text) => {
  const [words, setWords] = useState();
  const [chars, setChars] = useState();
  const [charNoSpaces, setCharNoSpaces] = useState();
  const [sentence, setSentence] = useState();
  const [paragraph, setParagraph] = useState();

  //prevent event to append new
  useEffect(() => {
    setWords([]);
    setChars([]);
    setCharNoSpaces([]);
    setSentence([]);
    setParagraph([]);
  }, [text]);

  let arrStr;
  let wordsCount;
  let charCount;
  let charExcludingSpacesCount;
  let sentenceCount;
  let paragraphCount;
  let str = text;

  if (text === " ") {
    wordsCount = 0;
    charCount = 0;
    charExcludingSpacesCount = 0;
    sentenceCount = 0;
    paragraphCount = 0;
  } else {
    // uses a Regular Expression to remove the Non-ASCII characters from the string. .replace() method to replace the Non-ASCII characters with the empty string.
    // eslint-disable-next-line no-control-regex
    str = str.replace(/[^\x00-\x7F]/g, "");
    //it specifies the Unicode for the characters to remove. The range of characters between (0080 – FFFF) are removed.
    //str = str.replace(/[\u{0080}-\u{FFFF}]/gu, "");
    arrStr = str.split(" ");
    wordsCount = 0;
    charCount = 0;
    charExcludingSpacesCount = 0;
    sentenceCount = 0;

    //paragraph counter
    paragraphCount = text.replace(/\n$/gm, "").split(/\n/).length;
    //words and character counter
    arrStr.forEach((c) => {
      if (arrStr.length === 1 && c !== " ") wordsCount = arrStr.length;
      if (arrStr.length === 2 && c === " ") {
        wordsCount = 0;
        charCount = 0;
      }
      if (arrStr.length >= 2 && c !== " ") wordsCount = arrStr.length;
    });
    //sentence and character excluding spaces counter
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char !== " ") charExcludingSpacesCount++;
      if (char === "." || char === "?") sentenceCount++;
      charCount++;
    }
  }
  //setting data with React hooks
  useEffect(() => {
    setWords(wordsCount);
    setChars(charCount);
    setCharNoSpaces(charExcludingSpacesCount);
    setSentence(sentenceCount);
    setParagraph(paragraphCount);
  }, [
    wordsCount,
    charCount,
    charExcludingSpacesCount,
    sentenceCount,
    paragraphCount,
  ]);

  return { words, chars, charNoSpaces, sentence, paragraph };
};

export default useText;

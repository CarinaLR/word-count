import { useState, useEffect } from "react";

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

  let arrStr = text.split(" ");
  let wordsCount = 0;
  let charCount = 0;
  let charExcludingSpacesCount = 0;
  let sentenceCount = 0;
  let paragraphCount = text.replace(/\n$/gm, "").split(/\n/).length;

  arrStr.forEach((c) => {
    if (arrStr.length === 2 && c === " ") {
      alert("please send a text");
      wordsCount = 0;
    }
    if (arrStr.length > 2 && c !== " ") wordsCount = arrStr.length;
  });

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char !== " ") charExcludingSpacesCount++;
    if (char === ".") sentenceCount++;
    charCount++;
  }

  useEffect(() => {
    setWords(wordsCount);
    setChars(charCount - 1);
    setCharNoSpaces(charExcludingSpacesCount - 1);
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

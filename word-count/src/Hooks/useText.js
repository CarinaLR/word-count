import { useState, useEffect } from "react";

const useText = (text) => {
  console.log("text", text);
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
  let wordsCount = arrStr.length;
  let charCount = 0;
  let charExcludingSpacesCount = 0;
  let sentenceCount = 0;
  let paragraphCount = text.split(/\n/).length;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    charCount++;
    if (char !== " ") charExcludingSpacesCount++;
    if (char === ".") sentenceCount++;
  }
  console.log("wordsCount", wordsCount);
  console.log("charCount", charCount);
  console.log("charExcludingSpacesCount", charExcludingSpacesCount);
  console.log("sentenceCount", sentenceCount);
  console.log("paragraphCount", paragraphCount);

  useEffect(() => {
    setWords(wordsCount);
    setChars(charCount);
    setCharNoSpaces(charExcludingSpacesCount);
    setSentence(sentenceCount);
    setParagraph(charExcludingSpacesCount);
  }, [wordsCount, charCount, charExcludingSpacesCount, sentenceCount]);

  return { words, chars, charNoSpaces, sentence, paragraph };
};

export default useText;

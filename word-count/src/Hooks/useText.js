import { useState, useEffect } from "react";
/* suggestion
clear out all unicode characters.
 -This approach uses a Regular Expression to remove the Non-ASCII characters from the string.
 -Only characters that has value from zero to 127 are valid. (0x7F is 127 in hex).
 -Use .replace() method to replace the Non-ASCII characters with the empty string.
*/
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
    arrStr = text.split(" ");
    wordsCount = 0;
    charCount = 0;
    charExcludingSpacesCount = 0;
    sentenceCount = 0;

    //paragraph counter
    paragraphCount = text.replace(/\n$/gm, "").split(/\n/).length;
    //words and character counter
    // eslint-disable-next-line no-control-regex
    str = str.replace(/[^\x00-\x7F]/g, "");
    console.log(str);
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
      if (char === ".") sentenceCount++;
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

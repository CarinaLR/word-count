import { useState, useEffect } from "react";

const useText = (text) => {
  console.log("text", typeof text, text);
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
  return null;
};

export default useText;

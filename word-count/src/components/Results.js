import React from "react";
import useText from "../Hooks/useText";

const Results = (props) => {
  const text = props.text;
  console.log("text", text);

  const { words, chars, charNoSpaces, sentence, paragraph } = useText(text);
  console.log("get values", words, chars, charNoSpaces, sentence, paragraph);

  return (
    <div>
      <h2>Results will be shown below after your submission.</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          <label className="card-header">CHECK RESULT</label>
          <li className="list-group-item">Words Count: {words}</li>
          <li className="list-group-item">Characters Count: {chars}</li>
          <li className="list-group-item">
            Characters Count without spacing: {charNoSpaces}
          </li>
          <li className="list-group-item">Sentence Count: {sentence}</li>
          <li className="list-group-item">Paragraph Count: {paragraph}</li>
        </ul>
      </div>
    </div>
  );
};

export default Results;

import React from "react";
import useText from "../Hooks/useText";

const Results = (props) => {
  const text = props.text;
  console.log("text", text);

  const { words, chars, charNoSpaces, sentence, paragraph } = useText(text);
  console.log("get values", words, chars, charNoSpaces, sentence, paragraph);

  return (
    <div>
      <h4 className="textLabel">
        Results will be shown below after your submission.
      </h4>
      <div className="card">
        <ul className="list-group list-group-flush">
          <label className="card-header cardHeder">
            <strong>CHECK RESULT</strong>
          </label>
          <li className="list-group-item">
            Words Count: <strong className="labelResults">{words}</strong>
          </li>
          <li className="list-group-item">
            Characters Count: <strong className="labelResults">{chars}</strong>
          </li>
          <li className="list-group-item">
            Characters Count without spacing:{" "}
            <strong className="labelResults">{charNoSpaces}</strong>
          </li>
          <li className="list-group-item">
            Sentence Count: <strong className="labelResults">{sentence}</strong>
          </li>
          <li className="list-group-item">
            Paragraph Count:{" "}
            <strong className="labelResults">{paragraph}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Results;

import React from "react";

const Results = () => {
  return (
    <div>
      <h2>Results will be shown below after your submission.</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          <label className="card-header">CHECK RESULT</label>
          <li className="list-group-item">Words Count: 0</li>
          <li className="list-group-item">Characters Count: 0</li>
          <li className="list-group-item">
            Characters Count without spacing: 0
          </li>
          <li className="list-group-item">Sentence Count: 0</li>
          <li className="list-group-item">Paragraph Count: 0</li>
        </ul>
      </div>
    </div>
  );
};

export default Results;

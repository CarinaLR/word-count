import React from "react";

const TextBlog = () => {
  return (
    <form>
      <div className="container">
        <h2>Place your text in the Textarea and submit your request.</h2>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default TextBlog;

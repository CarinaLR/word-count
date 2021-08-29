import React, { useState, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import useText from "../Hooks/useText";

const TextBlog = () => {
  const [text, setText] = useState(" ");
  const { register, handleSubmit } = useForm();

  useText(text);

  //function to get input from form and store in state
  const handleTextSubmition = (e) => {
    setText(e.search);
    //setPageNumber(1);
  };

  //function to handle form submition
  const onSubmit = (e) => {
    handleTextSubmition(e);
  };

  return (
    <form>
      <div className="container">
        <h2>Place your text in the Textarea and submit your request.</h2>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn bg-light" type="submit" value="submit">
            <i className="fas fa-search fa-sm">SUBMIT</i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default TextBlog;

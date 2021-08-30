import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useText from "../Hooks/useText";

const TextBlog = () => {
  const [text, setText] = useState(" ");
  const { register, handleSubmit } = useForm();

  const { words, chars, charNoSpaces, sentence, paragraph } = useText(text);
  console.log("get values", words, chars, charNoSpaces, sentence, paragraph);

  //function to get input from form and store in state
  const handleTextSubmition = async (e) => {
    setText(e.text);
  };

  //function to handle form submition
  const onSubmit = (e) => {
    handleTextSubmition(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <h2>Place your text in the Textarea and submit your request.</h2>
        <div className="form-group">
          <label>Example textarea</label>
          <textarea
            type="text"
            {...register("text")}
            className="form-control"
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

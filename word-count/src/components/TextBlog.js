import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Results from "./Results";

const TextBlog = () => {
  const [text, setText] = useState(" ");
  const { register, handleSubmit } = useForm();

  //function to get input from form and store in state
  const handleTextSubmition = async (e) => {
    setText(e.text);
  };

  //function to handle the form submission
  const onSubmit = (e) => {
    handleTextSubmition(e);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-8">
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
        </div>
        <div className="col-6 col-md-4">
          <Results text={text} />
        </div>
      </div>
    </div>
  );
};

export default TextBlog;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Results from "./Results";

const TextBlog = () => {
  const [text, setText] = useState(" ");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

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
              <h2 className="textLabel">
                Place your text in the Textarea and submit your request.
              </h2>
              <div className="form-group">
                <label>Submit once your text is ready to be sent.</label>
                <textarea
                  type="text"
                  {...register("text", { required: true })}
                  className="form-control texBoxSize"
                >
                  {/* {errors.name && errors.text.type === "required" && (
                    <span role="alert">
                      Text input is required to submit your form
                    </span>
                  )} */}
                </textarea>

                <button
                  className="btn bg-light submitButton"
                  type="submit"
                  value="submit"
                  disabled={!formState.isValid}
                >
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

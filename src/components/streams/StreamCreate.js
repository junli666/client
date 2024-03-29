import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};
const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  console.log(className);
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      <div>{renderError(meta)}</div>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
function StreamCreate(props) {
  const onSubmit = (formValues) => {
    console.log("before", formValues);
    props.createStream(formValues);
    console.log("after", formValues);
  };
  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
      <button className="ui button primary">Clear</button>
    </form>
  );
}

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

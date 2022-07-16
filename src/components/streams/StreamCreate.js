import React from "react";
import { reduxForm, Field, formValues } from "redux-form";
const renderInput = ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div>{meta.error}</div>
    </div>
  );
};
const onSubmit = (formValues) => {
  console.log(formValues);
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
  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
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

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

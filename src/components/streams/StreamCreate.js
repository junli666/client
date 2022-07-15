import React from "react";
import { reduxForm, Field } from "redux-form";
const renderInput = ({ input, label }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
const onSubmit = (formValue) => {
  console.log(formValue);
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
})(StreamCreate);

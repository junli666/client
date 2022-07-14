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
function StreamCreate(props) {
  return (
    <form className="ui form">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
    </form>
  );
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);

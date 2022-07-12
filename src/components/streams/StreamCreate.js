import React from "react";
import { reduxForm, Field } from "redux-form";

function StreamCreate(props) {
  const renderInput = (formProps) => {
    return <input {...formProps.input} />;
  };
  return (
    <form>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </form>
  );
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);

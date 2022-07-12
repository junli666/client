import React from "react";
import { reduxForm, Field } from "redux-form";

function StreamCreate(props) {
  //hoist this to fix problem of focus lost after first character entered
  const renderInput = ({ input }) => {
    return <input {...input} />;
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

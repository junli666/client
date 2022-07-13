import React from "react";
import { reduxForm, Field } from "redux-form";
const renderInput = ({ input }) => {
  return <input {...input} />;
};
function StreamCreate(props) {
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

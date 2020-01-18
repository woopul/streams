import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamList extends React.Component {
  renderInput({ input, label, meta }) {
    return(
      <div className="field">
        <label htmlFor="">{label}</label>
        <input {...input}/>
      </div>
    )
  }

  onSubmit() {
      
  }

  render() {
    return <div>Stream List</div>;
  }
}

export default StreamList;

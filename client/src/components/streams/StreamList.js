import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    console.log('<StreamList> didMount');
    
    this.props.fetchStreams();
  }

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

export default connect(null, { fetchStreams })(StreamList);

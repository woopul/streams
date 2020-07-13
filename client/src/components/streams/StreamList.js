import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    console.log('<StreamList> didMount');
    
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map(stream => {
       return <div className="item" key={stream.id}>
         <i className="large middle aligned icon camera"/>
         <div className="content">
           {stream.title}
           <div className="description">{stream.description}</div>
         </div>
       </div>
    })
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
    console.log(this.props.streams)
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
    
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams)}
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);

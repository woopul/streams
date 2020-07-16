import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    console.log("<StreamList> didMount");

    this.props.fetchStreams();
  }

  renderAdminButtons = (stream) => {
    const {currentUserId} = this.props;
    console.log('currentUserId, streamUserId', currentUserId, stream.userId);
    
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  renderCreateButton = () => {
    if(this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label htmlFor="">{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit() {}

  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

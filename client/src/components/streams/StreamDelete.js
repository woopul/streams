import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions/index";
import Modal from "../Modal";
import createBrowserHistory from "../../history";

const StreamDelete = (props) => {
  const [loadingComplete, setLoadingComplete] = useState(!!props.stream);
  const [deletionStarted, setDeletionStarted] = useState(false);
  const [deltionMessage, setDeletionMessage] = useState(`DELITING...`)

  useEffect(() => {
    console.log("BEFORE LOADING")
    setTimeout(() => {
      props.fetchStream(props.match.params.id);
      console.log("AFTER LOADING?")
      setLoadingComplete(true);
    }, 2000);
  }, []);

  const onDismiss = () => createBrowserHistory.push("/");

  const onDeleteStream = () => {
    setDeletionStarted(true);
    props.deleteStream(props.match.params.id);
    setTimeout(() => {
      setTimeout(() => onDismiss(), 1000);
      setDeletionMessage(`DELETION COMPLETE`)
    }, 1500);
  }

  const actions = (
    <>
      <button onClick={onDeleteStream} className={`ui button negative ${loadingComplete? '': 'disabled'}`}>Delete</button>
      <button onClick={onDismiss} className="ui button">Cancel</button>
    </>
  );

  const renderContentLoading = () => {
    if (!props.stream){
      return (
        <>
          <p>LOADING... </p>
          <p>stream id {props.match.params.id}</p>
        </>
      );
    }
    return (
      <p>
      <p>Are you sure you want to delete Stream of id : {props.match.params.id}?</p>
      <p>Title: {props.stream.title}</p>
      <p>Description: {props.stream.description}</p>
    </p>
    )
  };

  return (
    <>
      <div>StreamDelete</div>
      {!deletionStarted 
      ? <Modal
        title="Delete Stream"
        content={renderContentLoading()}
        actions={actions}
        onDismiss={onDismiss}
      />
      : <Modal
        title={deltionMessage}
        onDismiss={onDismiss}
      />
      }
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

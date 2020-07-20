import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";
import _ from "lodash";

const StreamEdit = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.fetchStream(props.match.params.id);
    }, 2000);
  }, []);

  const onSubmit = (formValues) => {
    console.log("PROPS", props)
    props.editStream(props.match.params.id, formValues);
  };

  if (!props.stream) {
    return <p>LOADING...</p>;
  } else {
    return (
      <>
        <h3>Edit a Stream</h3>
        <p>showing stream {props.match.params.id} </p>
        <p>TITLE: {props.stream.title}</p>
        <StreamForm
          initialValues={_.pick(props.stream, 'title', 'description')}
          onSubmit={onSubmit}
        />
      </>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

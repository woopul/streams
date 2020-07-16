import React, { useEffect } from "react";
import { arrayInsert } from "redux-form";
import { connect } from "react-redux";
import { fetchStream } from '../../actions/index'

const StreamEdit = (props) => {
  console.log(props);

  useEffect(() => {
     setTimeout(() => {
       props.fetchStream(props.match.params.id)
      }, 2000);
  }, []);

  return (
    <>
      <div>StreamEdit</div>
      <p>showing stream {props.match.params.id}, TITLE: </p>
      {props.stream ? <p>{props.stream.title}</p> : <p>LOADING...</p>}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);

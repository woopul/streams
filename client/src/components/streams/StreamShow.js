import React from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../../actions'
import { useEffect } from "react";

const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id)
    console.log('STREAM SHOW PROPS', props)
  }, [])

  if(!props.stream) {
    return (<div>LOADING...</div>)
  }
  const { title, description } = props.stream;
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchStream})(StreamShow);

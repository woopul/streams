import React, { useEffect, useState } from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  const [player, setPlayer] = useState(undefined);
  const [unmountCount, setUnmountCount] = useState(0);
  const videoRef = React.createRef();
  const { id } = props.match.params;

  useEffect(() => {
    props.fetchStream(id);
    buildPlayer();
    loadPlayer();
  }, []);
  
  // useEffect(() => {
  //   buildPlayer();
  //   loadPlayer();
  // }, [player, props.stream]);
  
  // useEffect(() => {
  //   setUnmountCount(unmountCount+1);
  //   console.log("PLAYER, mountCount", player, unmountCount)
  //   loadPlayer()
  //   if(player) return () => {
  //     console.log("I WAS UNMOUNTED");
  //     player.destroy();
  // //   };
  // }, [player]);

  const loadPlayer = () => {
    if(!player) return;
    player.attachMediaElement(videoRef.current);
    player.load();
  }
  
  const buildPlayer = () => {
    if(!props.stream) return ;
    setPlayer(flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    }));
  }

  if (!props.stream) {
    return <div>LOADING...</div>;
  }
  const { title, description } = props.stream;
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);

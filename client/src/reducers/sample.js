//Sample / TODO: delete later

const { EDIT_STREAM } = require("../actions/types");

const streamReducer = (state=[], action) => {
  switch(action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if(stream.id === action.payload.id) {
          return action.paload
        } else {
          return stream;
        }
      });
    default:
      return stream;
  }
}
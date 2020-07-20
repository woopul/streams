import React from 'react';
import ReactDOM from 'react-dom'
import createBrowserHistory from '../history';

const Modal = props => {

  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  document.body.appendChild(modal);

  return ReactDOM.createPortal(
    <div onClick={() => createBrowserHistory.push('/')} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
};

export default Modal;
import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = (props) => {
  return (
    <div className="modal">
      <span className="closeBtn">&times;</span>
      <div className="modal-content">THIS IS THE MODAL
        <Carousel collection={props.collection} />
      </div>
    </div>
  );
};

export default Modal;
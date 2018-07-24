import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = (props) => {
  return (
    <div className="modal">
      <div>THIS IS THE MODAL</div>
      <Carousel collection={props.collection} />
    </div>
  );
};

export default Modal;
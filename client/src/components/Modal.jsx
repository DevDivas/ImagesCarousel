import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = (props) => {
  return (
    <div className="modal">
      <span className="closeBtn">&times;</span>
      <span className="prevBtn">&#8249;</span>
      <span className="nextBtn">&#8250;</span>
      <div className="modal-content">
        <span>
          <img src={props.staged.url} className="focusImage" alt="" />
        </span>
        <Carousel collection={props.collection} />
      </div>
    </div>
  );
};

export default Modal;
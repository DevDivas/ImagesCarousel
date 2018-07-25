import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = (props) => {
  return (
    <div className={props.showModal ? 'modal-on' : 'modal-off'}>
      <span className="closeBtn" onClick={() => props.handleCloseClick()}>&times;</span>
      <span className="prevBtn">&#8249;</span>
      <span className="nextBtn">&#8250;</span>
      <div className="modal-content">
        <div className="focusContain">
          <img src={props.staged.url} className="focusImage" alt="" />
        </div>
        <Carousel collection={props.collection} />
      </div>
    </div>
  );
};

export default Modal;
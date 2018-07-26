import PropTypes from 'prop-types';
import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = ({ appState, handleCloseClick, handleThumbnailClick }) => (
  <div className={appState.showModal ? 'modal-on' : 'modal-off'}>
    <span className="closeBtn" onClick={() => handleCloseClick()} onKeyPress={() => ''} role="presentation">
      &times;
    </span>
    <div className="modal-content">
      <span className="prevBtn">
        &#8249;
      </span>
      <span className="nextBtn">
        &#8250;
      </span>
      <div className="focusContain">
        <img src={appState.focusImage.url} className="focusImage" alt="" />
      </div>
      <Carousel appState={appState} handleThumbnailClick={handleThumbnailClick} />
    </div>
  </div>
);

Modal.propTypes = {
  appState: PropTypes.object.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  handleThumbnailClick: PropTypes.func.isRequired,
};

export default Modal;

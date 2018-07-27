import PropTypes from 'prop-types';
import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = ({ appState, handleCloseClick, handleThumbnailClick, handlePrevBtnClick, handleNextBtnClick }) => (
  <div className={appState.showModal ? 'modal-on' : 'modal-off'}>
    <span className="closeBtn" onClick={() => handleCloseClick()} onKeyPress={() => ''} role="presentation">
      &times;
    </span>
    <div className="modal-content">
      <span className="prevBtn" onClick={() => handlePrevBtnClick()} onKeyPress={() => ''} role="presentation">
        &#8249;
      </span>
      <span className="nextBtn" onClick={() => handleNextBtnClick()} onKeyPress={() => ''} role="presentation">
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
  handlePrevBtnClick: PropTypes.func.isRequired,
  handleNextBtnClick: PropTypes.func.isRequired,
};

export default Modal;

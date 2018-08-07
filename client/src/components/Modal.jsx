import PropTypes from 'prop-types';
import Carousel from './Carousel.jsx';

require('../css/modal.css');
const React = require('react');

const Modal = (
  {
    appState,
    handleCloseClick,
    handleThumbnailClick,
    handlePrevBtnClick,
    handleNextBtnClick,
    handleCarouselToggle,
  },
) => (
  <div className={appState.showModal ? 'modal-on' : 'modal-off'}>
    <span className="closeBtn" onClick={handleCloseClick} onKeyPress={() => ''} role="presentation">
      &#9587;
    </span>
    <div className="modal-content">
      <span onClick={handlePrevBtnClick} onKeyPress={() => ''} role="presentation">
        <svg className="prevBtn" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
          <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
        </svg>
      </span>
      <span onClick={handleNextBtnClick} onKeyPress={() => ''} role="presentation">
        <svg className="nextBtn" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
          <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
        </svg>
      </span>
      <div className="focusContain">
        <img src={appState.focusImage.url} className="focusImage" alt="" />
      </div>
      <Carousel appState={appState} handleThumbnailClick={handleThumbnailClick} handleCarouselToggle={handleCarouselToggle} />
    </div>
  </div>
);

Modal.propTypes = {
  appState: PropTypes.object.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  handleThumbnailClick: PropTypes.func.isRequired,
  handlePrevBtnClick: PropTypes.func.isRequired,
  handleNextBtnClick: PropTypes.func.isRequired,
  handleCarouselToggle: PropTypes.func.isRequired,

};

export default Modal;

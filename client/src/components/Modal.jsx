import PropTypes from 'prop-types';
import Carousel from './Carousel.jsx';
import style from '../css/modal.css';

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
  <div className={appState.showModal ? style.modalOn : style.modalOff}>
    <span className={style.closeBtn} onClick={handleCloseClick} onKeyPress={() => ''} role="presentation">
      &#9587;
    </span>
    <div className={style.modalContent}>
      <span className={style.prevBtn} onClick={handlePrevBtnClick} onKeyPress={() => ''} role="presentation">
        &#8249;
      </span>
      <span className={style.nextBtn} onClick={handleNextBtnClick} onKeyPress={() => ''} role="presentation">
        &#8250;
      </span>
      <div className={style.focusContain}>
        <img src={appState.focusImage.url} className={style.focusImage} alt="" />
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

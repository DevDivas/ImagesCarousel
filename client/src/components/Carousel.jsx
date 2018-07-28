import PropTypes from 'prop-types';

require('../css/carousel.css');
require('../css/thumbnail.css');
const React = require('react');

const Carousel = ({ appState, handleThumbnailClick }) => (
  <div className="carouselFrame">
    <div className="deckInfo">{appState.focusImage.order}/{appState.collection.length}: {appState.focusImage.caption}</div>
    <ul className="carousel">
      {
        appState.collection.map((pic) => {
          const id = Number(pic.id);
          return (
            <span key={id} onClick={e => handleThumbnailClick(e)} onKeyPress={() => ''} role="presentation">
              {
                pic.url === appState.focusImage.url
                  ? <img src={pic.url} className="thumbnail-selected" alt="" />
                  : <img src={pic.url} className="thumbnail" alt="" />
              }
            </span>
          );
        })
      }
    </ul>
  </div>
);

Carousel.propTypes = {
  appState: PropTypes.object.isRequired,
  handleThumbnailClick: PropTypes.func.isRequired,
};

export default Carousel;

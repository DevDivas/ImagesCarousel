import PropTypes from 'prop-types';

require('../css/carousel.css');
require('../css/thumbnail.css');
const React = require('react');

class Carousel extends React.Component {
  componentDidUpdate(prevProps) {
    const { appState } = this.props;
    const { focusImage, collection } = appState;
    const { order } = focusImage;
    console.log(order);

    // if (collection.length > 7) {
      
    // }
  }

  render() {
    const { appState, handleThumbnailClick, handleCarouselToggle } = this.props;

    return (
      <div className="carouselFrame">
        <div className={appState.showCarousel ? 'infoPanel-top' : 'infoPanel-bottom'} onMouseEnter={appState.showCarousel ? () => {} : handleCarouselToggle}>
          <span className="imgInfo">
            {appState.focusImage.order}
            /
            {appState.collection.length}
            :
            {appState.focusImage.caption}
          </span>
          <div>
            <span className="carousel-toggle" onClick={handleCarouselToggle} onKeyPress={() => ''} role="presentation">
              {
                appState.showCarousel ? 'Hide photo list' : 'Show photo list'
              }
            </span>
          </div>
        </div>
        <div className="carousel-wrapper">
          {
            appState.showCarousel
              ? (
                <ul className="carousel" style={{ transform: 'translate(-210px, 0px)' }}>
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
              )
              : <span />
          }
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  appState: PropTypes.object.isRequired,
  handleThumbnailClick: PropTypes.func.isRequired,
  handleCarouselToggle: PropTypes.func.isRequired,
};

export default Carousel;

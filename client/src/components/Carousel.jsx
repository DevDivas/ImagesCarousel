import PropTypes from 'prop-types';

require('../css/carousel.css');
require('../css/thumbnail.css');
const React = require('react');

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: 'translate(0px, 0px)',
    };
  }

  componentDidUpdate(prevProps) {
    const { appState } = this.props;
    const { focusImage, collection } = appState;
    const { url, order } = focusImage;

    if (url !== prevProps.appState.focusImage.url) {
      if (collection.length > 7) {
        if (order < 4) {
          this.setState({
            move: 'translate(0px)',
          });
        } else if (order === 4) {
          this.setState({
            move: 'translate(-55px)',
          });
        } else if (order > 4 && order < collection.length - 3) {
          this.setState({
            move: `translate(-${(order - 4) * 110 + 55}px)`,
          });
        } else if (order === collection.length - 3) {
          this.setState({
            move: `translate(-${(order - 4) * 110}px)`,
          });
        } else if (order === collection.length - 2) {
          this.setState({
            move: `translate(-${(order - 5) * 110}px)`,
          });
        } else if (order === collection.length - 1) {
          this.setState({
            move: `translate(-${(order - 6) * 110}px)`,
          });
        } else if (order === collection.length) {
          this.setState({
            move: `translate(-${(order - 7) * 110}px)`,
          });
        } 
      }
    }
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
                <ul className="carousel" style={{ transform: this.state.move }}>
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

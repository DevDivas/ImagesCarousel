import PropTypes from 'prop-types';
import csStyle from '../css/carousel.css';
import tnStyle from '../css/thumbnail.css';

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
    let trans;

    if (url !== prevProps.appState.focusImage.url) {
      if (collection.length > 7) {
        if (order < 4) {
          trans = 'translate(0px)';
        } else if (order === 4) {
          trans = 'translate(-55px)';
        } else if (order > 4 && order < collection.length - 3) {
          trans = `translate(-${(order - 4) * 110 + 55}px)`;
        } else if (order === collection.length - 3) {
          trans = `translate(-${(order - 4) * 110}px)`;
        } else if (order === collection.length - 2) {
          trans = `translate(-${(order - 5) * 110}px)`;
        } else if (order === collection.length - 1) {
          trans = `translate(-${(order - 6) * 110}px)`;
        } else if (order === collection.length) {
          trans = `translate(-${(order - 7) * 110}px)`;
        }

        this.setState({
          move: trans,
        });
      }
    }
  }

  render() {
    const { appState, handleThumbnailClick, handleCarouselToggle } = this.props;

    return (
      <div className={csStyle.carouselFrame}>
        <div className={appState.showCarousel ? csStyle.infoPanelTop : csStyle.infoPanelBottom} onMouseEnter={appState.showCarousel ? () => {} : handleCarouselToggle}>
          <span className={csStyle.imgInfo}>
            {appState.focusImage.order}/{appState.collection.length}: {appState.focusImage.caption}
          </span>
          <div>
            <span className={csStyle.carouselToggle} onClick={handleCarouselToggle} onKeyPress={() => ''} role="presentation">
              {
                appState.showCarousel ? 'Hide photo list' : 'Show photo list'
              }
            </span>
          </div>
        </div>
        <div className={csStyle.carouselWrapper}>
          {
            appState.showCarousel
              ? (
                <ul className={csStyle.carousel} style={{ transform: this.state.move }}>
                  {
                    appState.collection.map((pic) => {
                      const id = Number(pic.id);
                      return (
                        <span key={id} onClick={e => handleThumbnailClick(e)} onKeyPress={() => ''} role="presentation">
                          {
                            pic.url === appState.focusImage.url
                              ? <img src={pic.url} className={tnStyle.thumbnailSelected} alt="" />
                              : <img src={pic.url} className={tnStyle.thumbnail} alt="" />
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

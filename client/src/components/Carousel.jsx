require('../css/carousel.css');
require('../css/thumbnail.css');
const React = require('react');

const Carousel = (props) => {
  return (
    <div className="carouselFrame">
      <ul className="carousel">
        {
          props.collection.map((pic) => {
            return (
              <span key={'' + pic.id} onClick={(e) => props.handleThumbnailClick(e)}>
                <img src={pic.url} className="thumbnail" alt="" />
              </span>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Carousel;

require('../css/carousel.css');
require('../css/thumbnail.css');
const React = require('react');

const Carousel = (props) => {
  return (
    <div>
      <ul className="carousel">
        {
          props.collection.map((pic) => {
            return (
              <span key={'' + pic.id}>
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

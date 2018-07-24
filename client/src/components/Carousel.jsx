require('../css/carousel.css');
require('../css/thumbnail.css');
const React = require('react');

const Carousel = (props) => {
  return (
    <div class="carousel">
      <ul>
        {
          props.collection.map((pic) => {
            return (
              <span key={'' + pic.id}>
                <img src={pic.url} class="thumbnail" alt="" />
              </span>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Carousel;

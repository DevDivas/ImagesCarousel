const React = require('react');

const Carousel = (props) => {
  return (
    <div>
      <ul>
        {
          props.collection.map((pic) => {
            return <img src={pic} width="100px" height="67px" alt=""/>;
          })
        }
      </ul>
    </div>
  );
};

export default Carousel;

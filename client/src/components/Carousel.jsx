const React = require('react');

const Carousel = (props) => {
  return (
    <div>
      <ul>
        {
          props.collection.map((pic) => {
            return <span key={''+pic.id}><img src={pic.url} width="100px" height="67px" alt=""/></span>;
          })
        }
      </ul>
    </div>
  );
};

export default Carousel;

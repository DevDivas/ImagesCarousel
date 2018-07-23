const React = require('react');

const Stage = (props) => {
  return (
    <div>
      <img src={props.staged.url} width="100%" height="500px"/>
    </div>
  );
};

export default Stage;

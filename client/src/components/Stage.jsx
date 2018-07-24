require('../css/stage.css');
const React = require('react');

const Stage = (props) => {
  return (
    <div>
      <img src={props.staged.url} class="stage" />
    </div>
  );
};

export default Stage;

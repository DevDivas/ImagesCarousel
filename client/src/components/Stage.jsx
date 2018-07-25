require('../css/stage.css');
const React = require('react');

const Stage = (props) => {
  return (
    <div onClick={() => props.handleStageClick()} >
      <img src={props.staged.url} className="stage" />
    </div>
  );
};

export default Stage;

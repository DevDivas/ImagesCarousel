import PropTypes from 'prop-types';

require('../css/stage.css');
const React = require('react');

const Stage = ({ staged, handleStageClick }) => (
  <div className="stage" onClick={() => handleStageClick()} onKeyPress={() => ''} role="presentation">
    <img src={staged.url} className="stage-img" alt="" />
  </div>
);


Stage.propTypes = {
  staged: PropTypes.object.isRequired,
  handleStageClick: PropTypes.func.isRequired,
};

export default Stage;

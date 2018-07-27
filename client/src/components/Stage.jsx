import PropTypes from 'prop-types';

require('../css/stage.css');
const React = require('react');

const Stage = ({ staged, handleStageClick }) => (
  <div className="stage" onClick={handleStageClick} onKeyPress={() => ''} role="presentation">
    <img src={staged.url} className="stage-img" alt="" />
    <input type="submit" className="viewPhotosBtn" value="View Photos" />
    <input type="submit" className="shareBtn" value="Share" />
    <input type="submit" className="saveBtn" value="Save" />
  </div>
);


Stage.propTypes = {
  staged: PropTypes.object.isRequired,
  handleStageClick: PropTypes.func.isRequired,
};

export default Stage;

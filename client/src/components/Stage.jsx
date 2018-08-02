import PropTypes from 'prop-types';
import style from '../css/stage.css';

const React = require('react');

const Stage = ({ staged, handleStageClick }) => (
  <div>
    <div className={style.stage} onClick={handleStageClick} onKeyPress={() => ''} role="presentation">
      <img src={staged.url} className={style.stageImg} alt="" />
    </div>
    <input type="submit" className={style.viewPhotosBtn} value="View Photos" onClick={handleStageClick} />
    <input type="submit" className={style.shareBtn} value="Share" />
    <input type="submit" className={style.saveBtn} value="Save" />
  </div>
);


Stage.propTypes = {
  staged: PropTypes.object.isRequired,
  handleStageClick: PropTypes.func.isRequired,
};

export default Stage;

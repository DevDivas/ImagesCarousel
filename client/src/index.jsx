import Stage from './components/Stage.jsx';
import Modal from './components/Modal.jsx';

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      staged: {},
      collection: [],
      showModal: false
    };
    this.handleStageClick = this.handleStageClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentDidMount() {
    axios.get('/rooms/12')
      .then((res) => {
        this.setState({
          staged: res.data[0],
          collection: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleStageClick() {
    this.setState({
      showModal: true
    });
  }

  handleCloseClick() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div>
        <Stage staged={this.state.staged} handleStageClick={this.handleStageClick} />
        <Modal staged={this.state.staged} collection={this.state.collection} showModal={this.state.showModal} handleCloseClick={this.handleCloseClick}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

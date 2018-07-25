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
        console.log(err);
      });
  }

  handleStageClick() {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div>
        <Stage staged={this.state.staged} handleStageClick={this.handleStageClick} />
        <Modal staged={this.state.staged} collection={this.state.collection} showModal={this.state.showModal} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

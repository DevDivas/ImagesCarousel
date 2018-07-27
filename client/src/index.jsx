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
      showModal: false,
      focusImage: {},
    };
    this.handleStageClick = this.handleStageClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  componentDidMount() {
    axios.get('/rooms/81')
      .then((res) => {
        this.setState({
          staged: res.data[0],
          collection: res.data,
          focusImage: res.data[0],
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleStageClick() {
    this.setState({
      showModal: true,
    });
  }

  handleCloseClick() {
    this.setState({
      showModal: false,
    });
  }

  handleThumbnailClick(e) {
    const imgSrc = e.target.getAttribute('src');
    const { collection } = this.state;
    const copyColl = collection.slice(0);
    for (let i = 0; i < copyColl.length; i += 1) {
      if (copyColl[i].url === imgSrc) {
        this.setState({
          focusImage: copyColl[i],
        });
      }
    }
  }

  render() {
    const { staged } = this.state;

    return (
      <div>
        <Stage staged={staged} handleStageClick={this.handleStageClick} />
        <Modal appState={this.state} handleCloseClick={this.handleCloseClick} handleThumbnailClick={this.handleThumbnailClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

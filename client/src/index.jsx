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
      focusImage: {}
    };
    this.handleStageClick = this.handleStageClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  componentDidMount() {
    axios.get('/rooms/12')
      .then((res) => {
        this.setState({
          staged: res.data[0],
          collection: res.data,
          focusImage: res.data[0]
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

  handleThumbnailClick(e) {
    let imgSrc = e.target.getAttribute('src');
    const copyColl = this.state.collection.slice(0);
    for (let i = 0; i < copyColl.length; i++) {
      if (copyColl[i].url === imgSrc) {
        this.setState({
          focusImage: copyColl[i]
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Stage staged={this.state.staged} handleStageClick={this.handleStageClick} />
        <Modal focusImage={this.state.focusImage} collection={this.state.collection} showModal={this.state.showModal} handleCloseClick={this.handleCloseClick} handleThumbnailClick={this.handleThumbnailClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

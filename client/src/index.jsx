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
    this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
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
    for (let i = 0; i < collection.length; i += 1) {
      if (collection[i].url === imgSrc) {
        this.setState({
          focusImage: collection[i],
        });
      }
    }
  }

  handleNextBtnClick() {
    const { collection, focusImage } = this.state;
    if (focusImage.order === collection.length) {
      this.setState({
        focusImage: collection[0],
      });
    } else {
      const nextOrder = focusImage.order + 1;
      for (let i = 0; i < collection.length; i += 1) {
        if (collection[i].order === nextOrder) {
          this.setState({
            focusImage: collection[i],
          });
        }
      }
    }
  }

  render() {
    const { staged } = this.state;

    return (
      <div>
        <Stage staged={staged} handleStageClick={this.handleStageClick} />
        <Modal appState={this.state} handleCloseClick={this.handleCloseClick} handleThumbnailClick={this.handleThumbnailClick} handleNextBtnClick={this.handleNextBtnClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

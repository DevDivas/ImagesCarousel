import Stage from './components/Stage.jsx';
import Carousel from './components/Carousel.jsx';

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      staged: {},
      collection: [],
    };
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

  render() {
    return (
      <div>
        <Stage staged={this.state.staged}/>
        <Carousel collection={this.state.collection}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

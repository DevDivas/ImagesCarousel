import Stage from './components/Stage.jsx';
import Carousel from './components/Carousel.jsx';

const React = require('react');
const ReactDOM = require('react-dom');


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      staged: "https://s3-us-west-1.amazonaws.com/homesnap/exterior/h81.jpg",
      collection: ["https://s3-us-west-1.amazonaws.com/homesnap/exterior/h81.jpg", "https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b7.jpg", "https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k10.jpg", "https://s3-us-west-1.amazonaws.com/homesnap/dining/d9.jpg", "https://s3-us-west-1.amazonaws.com/homesnap/dining/d6.jpg", "https://s3-us-west-1.amazonaws.com/homesnap/outer/o6.jpg"]
    };
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

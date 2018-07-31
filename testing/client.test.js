import { shallow, mount, render } from 'enzyme';
import React from 'react';

// import App from '../client/src/index.jsx';
import Stage from '../client/src/components/Stage.jsx';
import Modal from '../client/src/components/Modal.jsx';
import Carousel from '../client/src/components/Carousel.jsx';

// describe('<App />', () => {
//   it('should render the App', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper).toExist();
//   });
// });

describe('<Stage />', () => {
  it('should render a stage component', () => {
    const props = {
      staged: {'id': 0, 'url':'', 'home_id':0, 'order':0, 'caption':"''"},
      handleStageClick: () => {},
    };
    const wrapper = shallow(<Stage {...props} />);
    expect(wrapper).toExist();
  });
});

describe('<Modal />', () => {
  it('should render a modal component', () => {
    const jsonState = {"roomId":11,"staged":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"collection":[{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},{"id":81,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b8.jpg","home_id":11,"order":2,"caption":"The perfect getaway =)"},{"id":82,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b3.jpg","home_id":11,"order":3,"caption":"Air-conditioned"},{"id":83,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b2.jpg","home_id":11,"order":4,"caption":"Clean ~"},{"id":84,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k9.jpg","home_id":11,"order":5,"caption":"Spacious ~~"},{"id":85,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k4.jpg","home_id":11,"order":6,"caption":"Sunny"},{"id":86,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d8.jpg","home_id":11,"order":7,"caption":"Brand new !"},{"id":87,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d3.jpg","home_id":11,"order":8,"caption":"Recently renovated !"},{"id":88,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d9.jpg","home_id":11,"order":9,"caption":"Recently renovated !"},{"id":89,"url":"https://s3-us-west-1.amazonaws.com/homesnap/outer/o3.jpg","home_id":11,"order":10,"caption":"Tidy ~"}],"showModal":false,"focusImage":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"showCarousel":true};

    const props = {
      appState: jsonState,
      handleCloseClick: () => {},
      handleThumbnailClick: () => {},
      handlePrevBtnClick: () => {},
      handleNextClick: () => {},
      handleCarouselToggle: () => {},
    };
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper).toExist();
  });
});

describe('<Carousel />', () => {
  it('should render a carousel component', () => {
    const jsonState = {"roomId":11,"staged":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"collection":[{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},{"id":81,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b8.jpg","home_id":11,"order":2,"caption":"The perfect getaway =)"},{"id":82,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b3.jpg","home_id":11,"order":3,"caption":"Air-conditioned"},{"id":83,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b2.jpg","home_id":11,"order":4,"caption":"Clean ~"},{"id":84,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k9.jpg","home_id":11,"order":5,"caption":"Spacious ~~"},{"id":85,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k4.jpg","home_id":11,"order":6,"caption":"Sunny"},{"id":86,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d8.jpg","home_id":11,"order":7,"caption":"Brand new !"},{"id":87,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d3.jpg","home_id":11,"order":8,"caption":"Recently renovated !"},{"id":88,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d9.jpg","home_id":11,"order":9,"caption":"Recently renovated !"},{"id":89,"url":"https://s3-us-west-1.amazonaws.com/homesnap/outer/o3.jpg","home_id":11,"order":10,"caption":"Tidy ~"}],"showModal":false,"focusImage":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"showCarousel":true};

    const props = {
      appState: jsonState,
      handleThumbnailClick: () => {},
      handleCarouselToggle: () => {},
    };
    const wrapper = shallow(<Carousel {...props} />);
    expect(wrapper).toExist();
  });
});

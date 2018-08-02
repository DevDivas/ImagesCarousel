import { shallow, mount, render } from 'enzyme';
import React from 'react';

// import App from '../client/src/components/App.jsx';
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
  const props = {
    staged: {'id': 0, 'url':'', 'home_id':0, 'order':0, 'caption':"''"},
    handleStageClick: () => {},
  };
  const wrapper = shallow(<Stage {...props} />);

  it('should render a stage component', () => {
    expect(wrapper).toExist();
  });

  it('should have a div element with classname "stage"', () => {
    expect(wrapper.find('.stage').length).toBe(1);
  });

  it('should have an input element with classname "viewPhotosBtn"', () => {
    expect(wrapper.find('.viewPhotosBtn').length).toBe(1);
  });

  it('should have an button element with classname "shareBtn"', () => {
    expect(wrapper.find('.shareBtn').length).toBe(1);
  });

  it('should have an button element with classname "saveBtn"', () => {
    expect(wrapper.find('.saveBtn').length).toBe(1);
  });
});

describe('<Modal />', () => {
  const jsonState = {"roomId":11,"staged":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"collection":[{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},{"id":81,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b8.jpg","home_id":11,"order":2,"caption":"The perfect getaway =)"},{"id":82,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b3.jpg","home_id":11,"order":3,"caption":"Air-conditioned"},{"id":83,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b2.jpg","home_id":11,"order":4,"caption":"Clean ~"},{"id":84,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k9.jpg","home_id":11,"order":5,"caption":"Spacious ~~"},{"id":85,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k4.jpg","home_id":11,"order":6,"caption":"Sunny"},{"id":86,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d8.jpg","home_id":11,"order":7,"caption":"Brand new !"},{"id":87,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d3.jpg","home_id":11,"order":8,"caption":"Recently renovated !"},{"id":88,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d9.jpg","home_id":11,"order":9,"caption":"Recently renovated !"},{"id":89,"url":"https://s3-us-west-1.amazonaws.com/homesnap/outer/o3.jpg","home_id":11,"order":10,"caption":"Tidy ~"}],"showModal":false,"focusImage":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"showCarousel":true};
  const props = {
    appState: jsonState,
    handleCloseClick: () => {},
    handleThumbnailClick: () => {},
    handlePrevBtnClick: () => {},
    handleNextBtnClick: () => {},
    handleCarouselToggle: () => {},
  };
  const wrapper = shallow(<Modal {...props} />);

  it('should render a modal component', () => {
    expect(wrapper).toExist();
  });

  it('should have a close button', () => {
    expect(wrapper.find('.closeBtn').length).toBe(1);
  });

  it('should have a left arrow button', () => {
    expect(wrapper.find('.prevBtn').length).toBe(1);
  });

  it('should have a right arrow button', () => {
    expect(wrapper.find('.nextBtn').length).toBe(1);
  });

  it('should have the center image as the only image', () => {
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('.focusImage').length).toBe(1);
  });

});

describe('<Carousel />', () => {
  const jsonState = {"roomId":11,"staged":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"collection":[{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},{"id":81,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b8.jpg","home_id":11,"order":2,"caption":"The perfect getaway =)"},{"id":82,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b3.jpg","home_id":11,"order":3,"caption":"Air-conditioned"},{"id":83,"url":"https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b2.jpg","home_id":11,"order":4,"caption":"Clean ~"},{"id":84,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k9.jpg","home_id":11,"order":5,"caption":"Spacious ~~"},{"id":85,"url":"https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k4.jpg","home_id":11,"order":6,"caption":"Sunny"},{"id":86,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d8.jpg","home_id":11,"order":7,"caption":"Brand new !"},{"id":87,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d3.jpg","home_id":11,"order":8,"caption":"Recently renovated !"},{"id":88,"url":"https://s3-us-west-1.amazonaws.com/homesnap/dining/d9.jpg","home_id":11,"order":9,"caption":"Recently renovated !"},{"id":89,"url":"https://s3-us-west-1.amazonaws.com/homesnap/outer/o3.jpg","home_id":11,"order":10,"caption":"Tidy ~"}],"showModal":false,"focusImage":{"id":80,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h11.jpg","home_id":11,"order":1,"caption":"''"},"showCarousel":true};
  const props = {
    appState: jsonState,
    handleThumbnailClick: () => {},
    handleCarouselToggle: () => {},
  };
  const wrapper = shallow(<Carousel {...props} />);

  it('should render a carousel component', () => {
    expect(wrapper).toExist();
  });

  it('should have a slider', () => {
    expect(wrapper.find('.carousel').length).toBe(1);
  });

  it('should have the right number of thumbnails', () => {
    expect(wrapper.find('.thumbnail-selected').length).toBe(1);
    expect(wrapper.find('.thumbnail').length).toBe(jsonState['collection'].length - 1);
  });
});

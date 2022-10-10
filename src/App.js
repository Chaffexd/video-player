import React from 'react';
import './App.css';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://www.youtube.com/watch?v=4N5WAMJuo6U&ab_channel=%EB%A6%AC%ED%94%8C%EB%A0%88%EC%9D%B4LEEPLAY',
  cute: 'https://www.youtube.com/watch?v=0J7cmh3MLp4&ab_channel=FORMULA1',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.fast };
  }
chooseVideo(newVideo) {
  this.setState({
    src: VIDEOS[newVideo]
  });
}
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state}/>
      </div>
    );
  }
}

export default App;

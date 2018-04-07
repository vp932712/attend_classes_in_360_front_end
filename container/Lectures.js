import React from 'react';
import {
  Text,
  View,
  asset,
  Pano,
  VrButton
} from 'react-vr';

import RecordedLectures from './RecordedLectures.js';

//Scene
class Lectures extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('welcome.jpg')}/>
        <RecordedLectures
         environments={this.props.environments}
         captureSelection={this.props.captureSelection}
         previews={this.props.previews}
         text={this.props.text}
         changeScenes={this.props.changeScenes}
         scene={this.props.scene}
       />
      </View>
    )
  }
}

export default Lectures;




// <RecordedLectures updateView={this.props.updateView} />

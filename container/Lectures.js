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
        <VrButton onClick={() => console.log("hello world")}>
          <Text >
          Hello World
          </Text>
        </VrButton>
      </View>
    )
  }
}

export default Lectures;




// <RecordedLectures updateView={this.props.updateView} />

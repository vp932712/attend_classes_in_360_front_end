import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import RecordedLectures from './RecordedLectures.js';

//Scene
class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('dashboard-background.jpg')}/>
        <RecordedLectures updateView={this.props.updateView}

        />
      </View>
    )
  }
}

export default Lectures;

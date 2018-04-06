import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import RecordedLectures from '../components/RecordedLectures.js';


class Lectures extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('library.jpg')}/>
        <DashboardLayout
          updateView={this.props.updateView}
        />
      </View>
    )
  }
}

export defualt Lectures

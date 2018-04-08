import React from 'react';
import {Text, View, asset, Pano} from 'react-vr';

import RecordedLecturesComponent from './RecordedLecturesComponent.js';

class RecordedLecturesContainer extends React.Component {
  render() {
    return (<View>
      <Pano source={asset('welcome.jpg')}/>
      <RecordedLecturesComponent panoPlayer={this.props.panoPlayer} updateContainer={this.props.updateContainer} />
    </View>)
  }
}

export default RecordedLecturesContainer;

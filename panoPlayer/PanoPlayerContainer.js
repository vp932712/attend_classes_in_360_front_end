import React from 'react';
import {
  Text,
  View,
  asset,
  Pano,
  VideoPano,
  VideoControl
} from 'react-vr';

import TakeNotes from "./TakeNotes"
import ExitButton from "./ExitButton"

class PanoPlayerContainer extends React.Component {




  render() {
    return (<View>
      <VideoPano source={asset(this.props.video)}/>
      <TakeNotes/>
      <ExitButton updateContainer={this.props.updateContainer} />
    </View>)
  }
}

export default PanoPlayerContainer;

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

class PanoPlayerContainer extends React.Component {

  render() {
    return (<View>
      <VideoPano source={asset("firstVideo.mp4")}/>
      <TakeNotes/>
    </View>)
  }
}

export default PanoPlayerContainer;

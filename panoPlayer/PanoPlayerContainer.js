import React from 'react';
import {
  Text,
  View,
  asset,
  Pano,
  VideoPano,
  VideoControl
} from 'react-vr';




class PanoPlayerContainer extends React.Component {



  render() {
    return (
      <View>
        <VideoPano source={asset("firstVideo.mp4")}/>
        
      </View>
    )
  }
}


export default PanoPlayerContainer;
import React from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  asset,
  Pano,
  StyleSheet
} from 'react-vr';
import HomeButtons from "./HomeButtons"
import Exit from "./Exit"

class Home extends React.Component {

  render() {
    return (
      <View style={{
        width: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        layoutOrigin: [
          0.5, 0.5
        ],
        transform: [
          {
            translate: [0, 0, -3]
          }
        ]
      }}>

      <HomeButtons updateContainer={this.props.updateContainer} />
      <Exit updateContainer={this.props.updateContainer}/>
    

     <Pano source={asset("starry-sky.jpg")}/>
  </View>);
  }
}

export default Home

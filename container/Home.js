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
import HomeButtons from "../components/HomeButtons"
import Exit from "../components/Exit"

class Home extends React.Component {

  render() {
    return (
      <View>
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

      <HomeButtons updateView={this.props.updateView} />
    </View>
    <View style={{
        width:5,
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
      <Exit updateView={this.props.updateView}/>
    </View>
     <Pano source={asset("starry-sky.jpg")}/>
  </View>);
  }
}

export default Home

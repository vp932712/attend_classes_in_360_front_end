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
    return (<View style={{
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
      <HomeButtons/>
    </View>
    <View style={{
        width:,
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
      <Exit/>
    </View>);
  }
}

export default Home

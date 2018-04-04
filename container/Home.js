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
import Welcome from "../components/Welcome"
import Demo from "../components/Demo"

class Home extends React.Component {

  state = {}

  render() {
    return (<View style={{
        flex: 1,
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [
          0.5, 0.5
        ],
        transform: [
          {
            translate: [0, 0, -5]
          }
        ]
      }}>
      <Pano source={asset("library.jpg")}/>
      <Welcome/>
      <Demo/>
    </View>);
  }
}

export default Home

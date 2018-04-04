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
import AppName from "../components/AppName"
import Demo from "../components/Demo"

class Welcome extends React.Component {



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
      <AppName/>
      <Demo updateView={this.props.updateView}/>
    </View>);
  }
}

export default Welcome

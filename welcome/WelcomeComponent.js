import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';
import AppName from "./AppName"
import DemoButton from "./DemoButton"




class WelcomeComponent extends React.Component {
  render() {
    return (
      <View style={{
        width: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -3]}]
      }}>
        <AppName/>
        <DemoButton updateContainer={this.props.updateContainer}/>
      </View>
    )
  }
}

export default WelcomeComponent;

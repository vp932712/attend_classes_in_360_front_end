import React from 'react';
import {
  Text,
  View,
  VrButton,
  Pano,
  asset
} from 'react-vr';
import Home from "./Home"
class Main extends React.Component {

  state= {

    currentView: "home"

  }



  render() {
    return (
      <View>
      < Home />
      </View>
    );
  }
}

export default Main

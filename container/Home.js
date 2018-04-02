import React from 'react';
import {
  Text,
  View,
  VrButton,
  Pano,
  asset
} from 'react-vr';

class Home extends React.Component {

  state= {

    currentView: "home"

  }



  render() {
    return (
      <View>
        <Pano source={asset('welcome.jpg')}/>
      </View>
    );
  }
}

export default Home

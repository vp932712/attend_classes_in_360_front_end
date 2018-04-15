import React from 'react';
import {
  Text,
  View,
  VrButton,
  asset,
  Pano
} from 'react-vr';

import WelcomeComponent from './WelcomeComponent.js';


class WelcomeContainer extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('HighRes1.jpg')}/>
        <WelcomeComponent
          updateContainer={this.props.updateContainer}
        />
     </View>
    )
  }
}

export default WelcomeContainer;

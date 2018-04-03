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


class Home extends React.Component {

  state = {

  }

render() {
  return (

        <View >
          <Pano source={asset('welcome.jpg')}/>


          </View>












    );
  }
}





export default Home

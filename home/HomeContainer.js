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

  render() {
    return (

      <View>
      <Pano source={asset("HighRes2.jpg")}/>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [-1, 1, -5]}],
      }}>

      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
      <VrButton onClick={() => {this.props.updateContainer("home") }}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Home</Text>
         </VrButton>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
      <VrButton onClick={() => {this.props.updateContainer("recordedLectures") }}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Recorded Lectures</Text>
        </VrButton>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
      <VrButton onClick={() => {this.props.updateContainer("notes") }}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Notes</Text>
         </VrButton>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
      <VrButton onClick={() => {this.props.updateContainer("liveLectures") }}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Live Lectures</Text>
         </VrButton>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
      <VrButton onClick={() => {this.props.updateContainer("welcome") }}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Exit</Text>
         </VrButton>
      </View>

     </View>
     </View>

)



  }
}

export default Home

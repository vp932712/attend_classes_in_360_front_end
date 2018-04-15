import React from 'react';
import {
  Text,
  View,
  VrButton,
  asset,
  Pano
} from 'react-vr';
import buttonStyle from "../Styles/ButtonStyle"



class LiveLectureContainer extends React.Component {
  render() {
    return (
      <View>

      <View style={{
        width: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -3]}]
      }}>
      <View style={{
          margin: 0.1,
          height: 1
        }}>
        <Text style={{
            fontSize: 0.3,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>
         Comming Soon!!!!
        </Text>
      </View>
      <View>

        <View style={buttonStyle}>

          <VrButton onClick={() => this.props.updateContainer("home")}>
            <Text style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
              Exit
            </Text>
          </VrButton>

        </View>

      </View>

      </View>
     </View>
    )
  }
}

export default LiveLectureContainer;

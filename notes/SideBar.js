import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';


class SideBar extends React.Component {

  render() {
    return (
      <View
        style={{
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton onClick={() => {
              this.props.updateContainer("home")// send props to the parent
            } }>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
            Home
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton onClick={() => {
              this.props.updateContainer("recordedLectures")// send props to the parent
            } }>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
             Lectures
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton onClick={() => {
              this.props.updateContainer("notes")// send props to the parent
            } }>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
              Notes
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#898794"
          }}
        >
          <VrButton onClick={() => {
              this.props.updateContainer("welcome")// send props to the parent
            } }>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
              Exit
            </Text>
          </VrButton>
        </View>

      </View>
    )
  }
}

export default SideBar;

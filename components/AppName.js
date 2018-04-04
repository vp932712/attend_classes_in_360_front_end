import React from 'react';
import {Text, View} from 'react-vr';

class AppName extends React.Component {
  render() {
    return (<View style={{
        margin: 0.1,
        height: 0.5
      }}>
      <Text style={{
          fontSize: 0.5,
          fontWeight: '400',
          textAlign: 'center',
          textAlignVertical: 'center'
        }}>
        Lectures In 360
      </Text>
    </View>)
  }
}

export default AppName

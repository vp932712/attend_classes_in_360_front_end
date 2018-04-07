import React from 'react';
import {Text, View} from 'react-vr';

class AppName extends React.Component {
  render() {
    return (<View style={{
        margin: 0.1,
        height: 1
      }}>
      <Text style={{
          fontSize: 0.3,
          fontWeight: '400',
          textAlign: 'center',
          textAlignVertical: 'center'
        }}>
       Welcome to Lectures In 360
      </Text>
    </View>)
  }
}

export default AppName

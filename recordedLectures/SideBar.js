import React from 'react';
import {Text, View, VrButton} from 'react-vr';

class SideBar extends React.Component {

  render() {
    return (<View style={{
        margin: 0.1,
        width: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
      }}>
      <View style={{
          margin: 0.1,
          height: 0.3,
          backgroundColor: "#898794"
        }}>
        <VrButton>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Home
          </Text>
        </VrButton>
      </View>

      <View style={{
          margin: 0.1,
          height: 0.3,
          backgroundColor: "#898794"
        }}>
        <VrButton>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Notes
          </Text>
        </VrButton>
      </View>

      <View style={{
          margin: 0.1,
          height: 0.3,
          backgroundColor: "#898794"
        }}>
        <VrButton>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Lectures
          </Text>
        </VrButton>
      </View>

      <View style={{
          margin: 0.1,
          height: 0.3,
          backgroundColor: "#898794"
        }}>
        <VrButton>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Profile
          </Text>
        </VrButton>
      </View>

    </View>)
  }
}

export default SideBar;

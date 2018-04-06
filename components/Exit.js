import React from 'react';
import {Text, View, VrButton, Animated} from 'react-vr';

class Exit extends React.Component {
  render() {
    return (<View>
      <Animated.View style={{
          margin: 0.1,
          paddingLeft: 0.2,
          paddingRight: 0.2,
          height: 0.3,
          backgroundColor: '#A482DF',
          borderRadius: 0.1,
          opacity: 2,
          transform: [
            {
              translateX: 5
            }
          ]
        }}>

        <VrButton onClick={() => {
            this.props.updateView("welcome")
          }}>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            EXIT
          </Text>
        </VrButton>

      </Animated.View>

    </View>)
  }
}
export default Exit;

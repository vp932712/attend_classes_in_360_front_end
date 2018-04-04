import React from 'react';
import {Text, View, VrButton} from 'react-vr';

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
          opacity: this.state.fadeIn,
          transform: [
            {
              translateX: this.state.slideRight
            }
          ]
        }}>

        <VrButton onClick={() => this.props.changeScenes(nextScene)}>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            EXIT
          </Text>
        </VrButton>
        )}
      </Animated.View>

    </View>)
  }
}
export default Exit;
import React from 'react';
import {Text, View, VrButton} from 'react-vr';

class PlayButton extends React.Component {

  render() {

    return (<View>

      <View style={{
          margin: 0.1,
          paddingLeft: 0.2,
          paddingRight: 0.2,
          height: 0.3,
          backgroundColor: '#A482DF',
          borderRadius: 0.1
        }}>

        <VrButton onClick={() => this.props.panoPlayer()}>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Play
          </Text>
        </VrButton>

      </View>

    </View>
)
    }
}

export default PlayButton;

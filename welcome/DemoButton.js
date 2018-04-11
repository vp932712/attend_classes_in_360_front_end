import React from 'react';
import {Text, View, VrButton} from 'react-vr';


import buttonStyle from "../Styles/ButtonStyle"

class DemoButton extends React.Component {

  render() {

    return (<View>

      <View style={buttonStyle}>

        <VrButton onClick={() => this.props.updateContainer("home")}>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Demo
          </Text>
        </VrButton>

      </View>

    </View>
)
    }
}

export default DemoButton;

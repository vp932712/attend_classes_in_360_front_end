import React from 'react';
import {Text, View, VrButton} from 'react-vr';

class Demo extends React.Component {

  state = {
    fontSize: 0.2,
    textAlign: 'center',
    color: "blue"
  }

  render() {
    return (<View style={{
        margin: 0.1,
        height: 0.3,
        backgroundColor: '#1AC8F7'
      }}>
      <VrButton onClick={() => {
          this.setState({color: "green"})// send props to the parent
        }}>
        <Text style={this.state} onEnter={() => this.setState({color: 'red'})} onExit={() => this.setState({color: 'white'})}>
          DEMO
        </Text>
      </VrButton>
    </View>)
  }
}

export default Demo

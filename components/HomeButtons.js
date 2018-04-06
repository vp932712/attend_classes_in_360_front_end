import React from 'react';
import {Text, View, VrButton, Image, asset} from 'react-vr';

class HomeButtons extends React.Component {
  state = {
    fontSize: 0.2,
    textAlign: 'center',
    color: "blue"
  }

  render() {

    return (<View style={{
        marginTop: -0.09,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <View style={{
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => {
              this.props.updateView("home")// send props to the parent
            } }>
            <Text style={this.state} onEnter={() => this.setState({color: 'red'})} onExit={() => this.setState({color: 'white'})}>
              home
            </Text>
          </VrButton>
        </View>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => {
              this.props.updateView("home")// send props to the parent
            }}>
            <Text style={this.state} onEnter={() => this.setState({color: 'red'})} onExit={() => this.setState({color: 'white'})}>
              lectures
            </Text>
          </VrButton>
        </View>
      </View>

      <View style={{
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => {
              this.props.updateView("notes")// send props to the parent
            }}>
            <Text style={this.state} onEnter={() => this.setState({color: 'red'})} onExit={() => this.setState({color: 'white'})}>
              notes
            </Text>
          </VrButton>
        </View>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => {
              this.props.updateView("videos")// send props to the parent
            }}>
            <Text style={this.state} onEnter={() => this.setState({color: 'red'})} onExit={() => this.setState({color: 'white'})}>
              videos
            </Text>
          </VrButton>
        </View>
      </View>

    </View>)
  }
}

export default HomeButtons;

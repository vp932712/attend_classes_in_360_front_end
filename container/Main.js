import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';
import Home from "./Home"
import Welcome from "../components/Welcome"
import Demo from "../components/Demo"

class Main extends React.Component {

  state = {

    currentView: "home"

  }

  updateView = (viewType) => {
    this.setState({currentView: viewType})
  }

  render() {
    return (<View style={{
        flex: 1,
        width: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        layoutOrigin: [
          0.5, 0.5
        ],
        transform: [
          {
            translate: [0, 0, -5]
          }
        ]
      }}>

      <Welcome/>
      <Demo/>
    </View>);
  }
}

export default Main

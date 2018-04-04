import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';
import Home from "./Home"
import Welcome from "./Welcome"

class Main extends React.Component {

  state = {
    currentView: "welcome"
  }

  updateView = (viewType) => {
    this.setState({currentView: viewType})
  }

  render() {
    console.log(this.state)
    return (<View>
      {this.state.currentView === "welcome"? <Welcome updateView={this.updateView}/> : null}
      {this.state.currentView === "home"? <Home updateView={this.updateView}/> : null}

    </View>);
  }
}

export default Main

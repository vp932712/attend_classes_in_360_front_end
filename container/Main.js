import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';
import Home from "./Home"

class Main extends React.Component {

  state = {

    currentView: "home"

  }

  // updateView = (viewType) => {
  //   this.setState({currentView: viewType})
  // } set the views of the back ground


  render() {
    return (<View>
      < Home/>
    </View>
  );
  }
}

export default Main

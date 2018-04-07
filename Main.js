import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';

import WelcomeContainer from "./welcome/WelcomeContainer"


class Main extends React.Component {

  state = {
    currentContainer: "welcome"
  }

  updateContainer = (container) => {
    this.setState({currentContainer: container})
  }

  currentView = () => {
    switch (this.state.currentContainer) {
      case "welcome":
        return <WelcomeContainer updateContainer={this.updateContainer}/>
        break;
      case "home":
        return <Home updateContainer={this.updateContainer}/>

        break;
      case "lectures":
        return <Lectures updateContainer={this.updateContainer}
              captureSelection={this.captureSelection.bind(this)}
              previews={this.state.previews}
              environments={this.state.environments}
              showButton={false}
              text={"Select Environment"}
              changeScenes={this.changeScenes.bind(this)}
              scene={this.state.scene}/>

        break;
      case "notes":
        return <Notes updateContainer={this.updateContainer}/>

        break;
      default:
        return null;
    }
  }

  render() {
    console.log(this.state)
    return (<View>
      {  this.currentView() }

    </View>);
  }
}

export default Main

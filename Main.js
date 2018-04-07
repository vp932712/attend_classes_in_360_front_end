import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';
import Home from "./Home"
import Welcome from "./Welcome"
import Lectures from "./Lectures"

class Main extends React.Component {

  state = {
    currentView: "welcome"
  }

  updateView = (viewType) => {
    this.setState({currentView: viewType})
  }

  currentView = () => {
    switch (this.state.currentView) {
      case "welcome":
        return <Welcome updateView={this.updateView}/>
        break;
      case "home":
        return <Home updateView={this.updateView}/>

        break;
      case "lectures":
        return <Lectures updateView={this.updateView}
              captureSelection={this.captureSelection.bind(this)}
              previews={this.state.previews}
              environments={this.state.environments}
              showButton={false}
              text={"Select Environment"}
              changeScenes={this.changeScenes.bind(this)}
              scene={this.state.scene}/>

        break;
      case "notes":
        return <Notes updateView={this.updateView}/>

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

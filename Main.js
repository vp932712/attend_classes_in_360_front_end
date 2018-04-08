import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';

import WelcomeContainer from "./welcome/WelcomeContainer"
import HomeContainer from "./home/HomeContainer"
import RecordedLecturesContainer from "./recordedLectures/RecordedLecturesContainer"

class Main extends React.Component {

  state = {
    currentContainer: "welcome",
    lecturesImg:"",
    lectureList: ["firstVideo.mp4" ]
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
        return <HomeContainer updateContainer={this.updateContainer}/>

        break;
      case "recordedLectures":
        return <RecordedLecturesContainer updateContainer={this.updateContainer} lecturesImg={this.state.lectures}/>

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
      {this.currentView()}

    </View>);
  }
}

export default Main

import React from 'react';
import {Text, View, VrButton, Pano, asset} from 'react-vr';

import WelcomeContainer from "./welcome/WelcomeContainer"
import HomeContainer from "./home/HomeContainer"
import RecordedLecturesContainer from "./recordedLectures/RecordedLecturesContainer"
import PanoPlayerContainer from "./panoPlayer/PanoPlayerContainer"
class Main extends React.Component {

  state = {
    currentContainer: "welcome",
    lecturesImg:"",
    lectureList: ["firstVideo.mp4" ],
    currentVideo: ""
  }

  updateContainer = (container) => {
    this.setState({currentContainer: container})
  }

  viewPanoPlayer=(id)=>{
    this.setState({
      currentContainer: "panoPlayer",
      currentVideo: id
    })
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
        return <RecordedLecturesContainer updateContainer={this.updateContainer}
        lecturesImg={this.state.lectures}
        panoPlayer={this.viewPanoPlayer}/>

        break;
      case "notes":
        return <Notes updateContainer={this.updateContainer}/>

        break;
        case "panoPlayer":
          return <PanoPlayerContainer video={this.state.currentVideo}
          updateContainer={this.updateContainer}/>

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

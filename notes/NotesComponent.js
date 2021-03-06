import React from 'react';
import {
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

import SideBar from './SideBar.js';
import EachNotes from './EachNotes.js';
import NextButton from './NextButton.js';


class NotesComponent extends React.Component {


  state = {
      slideLeft: new Animated.Value(-1),
      fadeIn: new Animated.Value(0),
      playButton: false,
      color1: "#A482DF",
      color2: "#DBDAF1",
      borderWidths: [0, 0, 0, 0, 0, 0],
      lectureId: "",

    };


  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.ease
          }
        )
      ])
    ]).start();
  }

  selectNotes=(id)=>{

    if(this.state.playButton === false) {
      this.setState({playButton: true});
    }

    switch (id) {
      case 1:
        this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0], lectureId: 0});
        break;
      case 2:
        this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0], lectureId: 1});
        break;
      case 3:
        this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0], lectureId: 2});
        break;
      case 4:
        this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0], lectureId: 3});
        break;
      case 5:
        this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0], lectureId: 4});
        break;
      case 6:
        this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05], lectureId: 5});
        break;
    }
  }

  panoPlayer=()=>{
    this.props.panoPlayer(this.state.lectureId);
  }
  render() {
    console.log(this.state)
    return (
      <View>
        <Animated.View
          style={{
            width: 5,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            layoutOrigin: [0.5, 0.5],
            opacity: this.state.fadeIn,
            transform: [
              {translateX: this.state.slideLeft},
              {translateZ: -3}
            ],
            marginTop: -0.3
          }}
        >
          <SideBar updateContainer={this.props.updateContainer}/>
          <EachNotes
            selectVideo={this.selectVideo}
            borderWidths={this.state.borderWidths}

          />

        </Animated.View>

        <View style={{
          width: 5,
          height: 0.5,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -3]}],
          marginTop: -0.7
        }}>
       {this.state.playButton? <PlayButton panoPlayer={this.panoPlayer}/> : null}
        </View>
      </View>
    )
  }
}

export default NotesComponent;

import React, {Component} from 'react';
import {View, VrButton, StyleSheet, Text} from 'react-vr';

class TakeNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: this.props.rows - 1,
      displayArray: ['|'],
      text: '',
      rows:  4,
      columns:  50,
      submitHandler:  null,
      showScroll: false,
      toggleCursor: true,
      x:  -1,
      y:  0.2,
      z:  -1.5,
      pages: 0,
      focus: false,
      counter: 0,
      opacity: 0,
      textColor: this.props.textColor || 'white',
      backgroundColor: this.props.backgroundColor || 'grey',
      inputText: "Take Notes in here delete this line."
    }
  }

  focus() {
    this.setState({focus: true});
  }

  // ---------------

  submitHandler = (e) => {
    // console.log("input Event", e.nativeEvent.inputEvent.eventType, e.nativeEvent.inputEvent )
    let key = ""
    if (e.nativeEvent.inputEvent.eventType === "keydown") {
      key = e.nativeEvent.inputEvent.key

      if (key === "Enter") {
        this.setState({
          inputText: this.state.inputText + "\n"
        })
      } else if (key === "Backspace") {

        this.setState({
          inputText: this.state.inputText.slice(0, -1)

        })
      } else {
        this.setState({
          inputText: this.state.inputText + key
        })
      }

    }

  }

  handleSubmit = () => {
    console.log("hello")
  }

  render() {

    return (<View onInput={this.submitHandler
} style={{
        transform: [
          {
            rotateY: this.props.rotateY || 0
          }, {
            rotateX: this.props.rotateX || 0
          }
        ]
      }}>
      <View >
        <VrButton onClick={this.focus.bind(this)}>
          <Text style={{
              textAlign: 'center',
              backgroundColor: this.state.backgroundColor,
              color: this.state.textColor,
              width: this.state.columns / 20,
              opacity: 0.8,
              height: this.state.rows / 10,
              margin: 0.1,
              fontSize: 0.08,
              transform: [
                {
                  translate: [this.state.x, this.state.y, this.state.z]
                }
              ]
            }}>

            {this.state.inputText}
          </Text>
        </VrButton>
        <VrButton onClick={this.handleSubmit} style={{
            transform: [
              {
                translate: [this.state.x, this.state.y, this.state.z]
              }
            ]
          }}>
          <Text style={{
              fontSize: 0.2,
              textAlign: 'center',
              color: "#FFFFFF"
            }}>
            Submit
          </Text>
        </VrButton>

      </View>

    </View>);
  }
}

export default TakeNotes;

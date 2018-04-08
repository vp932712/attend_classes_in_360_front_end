import React from 'react';
import {Text, View, VrButton, Image, asset} from 'react-vr';

class Boxes extends React.Component {

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
          <VrButton onClick={() => this.props.selectVideo(1)}>

            <Image source={{
                uri: "logo.jpg"
              }} style={{
                width: 1,
                height: 0.6,
                borderWidth: this.props.borderWidths[0],
                borderColor: "#A482DF"
              }}/>

          </VrButton>
        </View>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => this.props.selectVideo(2)}>

            <Image source={{
                uri: "logo.jpg"
              }} style={{
                width: 1,
                height: 0.6,
                borderWidth: this.props.borderWidths[1],
                borderColor: "#A482DF"
              }}/>

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
          <VrButton onClick={() => this.props.selectVideo(3)}>
            <Image source={{
                    uri: "logo.jpg"
                  }} style={{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[2],
                    borderColor: "#A482DF"
                  }}/>
          </VrButton>
        </View>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => this.props.selectVideo(4)}>
            <Image source={{
                    uri: "logo.jpg"
                  }} style={{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[3],
                    borderColor: "#A482DF"
                  }}/>
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
          <VrButton onClick={() => this.props.selectVideo(5)}>
            <Image source={{
                    uri: "logo.jpg"
                  }} style={{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}/>
          </VrButton>
        </View>
        <View style={{
            margin: 0.1,
            height: 0.6,
            backgroundColor: "#CAB9E5",
            borderStyle: "solid"
          }}>
          <VrButton onClick={() => this.props.selectVideo(6)}>
            <Image source={{
                    uri: "logo.jpg"
                  }} style={{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[5],
                    borderColor: "#A482DF"
                  }}/>
          </VrButton>
        </View>
      </View>

    </View>)
  }
}

export default Boxes;

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  VideoPano,
  Text,
  View,
} from 'react-vr';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import Main from "./Main"


export default class attend_classes_in_360_front_end extends React.Component {


  render() {
    return (
      <View>
        <Main />
      </View>

    );
  }
};



AppRegistry.registerComponent('attend_classes_in_360_front_end', () => attend_classes_in_360_front_end);

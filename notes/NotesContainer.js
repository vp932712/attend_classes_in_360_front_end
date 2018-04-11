import React from 'react';
import {Text, View, asset, Pano} from 'react-vr';

import NotesComponent from './NotesComponent.js';

class NotesContainer extends React.Component {
  render() {
    return (<View>
      <Pano source={asset('welcome.jpg')}/>
      <NotesComponent panoPlayer={this.props.panoPlayer} updateContainer={this.props.updateContainer} />
    </View>)
  }
}

export default NotesContainer;

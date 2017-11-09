import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {Button, Text} from 'native-base';
import Container from '../components/container';
import Main from '../components/main'

import {styles} from '../res/styles/index';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu he',
// });


export default class MainScreen extends Component {
    render() {
    return (
      <Container>
        <Main />
      </Container>
    );
  }
}

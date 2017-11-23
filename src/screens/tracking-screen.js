import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {Button, Text, Container, Content} from 'native-base';
// import Container from '../components/container';
import Tracking from '../components/tracking';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu he',
// });


export default class TrackingScreen extends Component {
    render() {
    return (
      <Container>
        <Content>
          <Tracking navigation={this.props.navigation} />
        </Content>
      </Container >
    );
  }
}

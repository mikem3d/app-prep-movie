'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {appprep, ORANGE, PINK} from '../../Styles';

export default class Welcome extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  componentWillMount() {
    setTimeout(() => {
      const {navigate} = this.props.navigation;
      navigate('home');
    }, 4000);
  }
  
  render() {
    return (
      <LinearGradient colors={[ORANGE, PINK]} style={styles.container}>
        <View style={[styles.titlecontainer, appprep.flex]}>
          <Text style={styles.title}>Movies App</Text>
        </View>
        <Text style={styles.footer}>Copyright 2018</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titlecontainer: {
    justifyContent: 'center'
  },
  footer: {
    fontFamily: 'JosefinSans-Light',
    color: '#fff',
    fontSize: 14
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 34,
    color: '#fff'
  }
});


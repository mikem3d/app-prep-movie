'use strict';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {appprep, ORANGE, PINK} from '../../Styles';
import Services from '../services';

export default class SmallListItem extends PureComponent {
  
  static propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func
  }

  render() {
    const {title, backdrop_path} = this.props.data;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <View style={styles.wrapper}>
          <Image style={[styles.img]} source={{uri: `${Services.imageUrl}w500${backdrop_path}`}} />
          <LinearGradient colors={[ORANGE, PINK]} style={styles.gradient} />
          <Text style={styles.title} numberOfLines={2}>{title.toUpperCase()}</Text>
        </View>
        <View style={styles.imgshadow}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    height: 180,
    width: 320
  },
  wrapper: {
    borderRadius: 6,
    zIndex: 2,
    overflow: 'hidden',
    width: 320,
    height: 160
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 320,
    height: 160,
    zIndex: 2,
    opacity: 0.3
  },
  title: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    zIndex: 3,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'JosefinSans-Bold'
  },
  absolute: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
  },
  img: {
    backgroundColor: '#e0e0e0',
    height: 160,
    width: 320,
    borderRadius: 6,
    zIndex: 2,
    resizeMode: 'cover'
  },
  imgshadow: {
    top: 16,
    left: 16,
    backgroundColor: '#000',
    position: 'absolute',
    width: 293,
    height: 144,
    opacity: 0.5,
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 9
  }
});

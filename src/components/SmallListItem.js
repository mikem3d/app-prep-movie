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

import {appprep, GREYTEXT} from '../../Styles';
import Services from '../services';

export default class SmallListItem extends PureComponent {
  
  static propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func
  }

  render() {
    const {title, poster_path} = this.props.data;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Image style={[styles.img]} source={{uri: `${Services.imageUrl}w500${poster_path}`}} />
        <Text style={styles.title} numberOfLines={2}>{title.toUpperCase()}</Text>
        <View style={styles.imgshadow}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    height: 240,
    width: 140
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    color: GREYTEXT,
    fontFamily: 'JosefinSans-Regular',
    textAlign: 'center'
  },
  absolute: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
  },
  img: {
    backgroundColor: '#e0e0e0',
    height: 210,
    width: 140,
    borderRadius: 6,
    zIndex: 2
  },
  imgshadow: {
    top: 20,
    left: 8,
    backgroundColor: '#000',
    position: 'absolute',
    width: 123,
    height: 185,
    opacity: 0.7,
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 9
  }
});

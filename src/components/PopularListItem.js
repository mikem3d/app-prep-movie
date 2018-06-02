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

import {appprep, GREYTEXT, ORANGE, PINK} from '../../Styles';
import Services from '../services';

export default class PopularListItem extends PureComponent {
  
  static propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func
  }

  render() {
    const {title, poster_path, vote_average, release_date} = this.props.data;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <View style={styles.imgwrapper}>
          <Image style={[styles.img]} source={{uri: `${Services.imageUrl}w500${poster_path}`}} />
          <LinearGradient colors={[ORANGE, PINK]} style={styles.rating}>
            <Text style={styles.ratingtext}>{vote_average.toString().split('.')[0]}</Text>
            <Text style={styles.ratingtextsmall}>.{vote_average.toString().split('.')[1]}</Text>
          </LinearGradient>
          <LinearGradient colors={['rgba(0,0,0,0)', 'rgb(0,0,0)']} style={styles.bottomshade}>
            <Text style={styles.titlelight}>{release_date.split('-')[0]}</Text>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
          </LinearGradient>
        </View>
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
  bottomshade: {
    position: 'absolute',
    bottom: 0,
    width: 140,
    height: 60,
    zIndex: 2,
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: 'flex-end'
  },
  rating: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    zIndex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 7,
    flexDirection: 'row',
    top: 10,
    right: 10
  },
  ratingtext: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'JosefinSans-Regular',
  },
  ratingtextsmall: {
    fontSize: 10,
    color: '#fff'
  },
  titlelight: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'JosefinSans-Light',
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    color: '#fff',
    fontFamily: 'JosefinSans-Bold',
  },
  absolute: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
  },
  img: {
    backgroundColor: '#e0e0e0',
    height: 210,
    width: 140,
    zIndex: 2
  },
  imgwrapper: {
    borderRadius: 6,
    overflow: 'hidden',
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

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Text
} from 'react-native';
import {appprep, BGGREY, GREYTEXT, LIGHTGREY} from '../../Styles';
import Icon from 'react-native-vector-icons/Ionicons';

import SmallListItem from '../components/SmallListItem';
import PopularListItem from '../components/PopularListItem';
import LargeListItem from '../components/LargeListItem';

import Services from '../services';

export default class Home extends Component {
  
  static propTypes = {
    navigation: PropTypes.object
  }

  state = {
    trailers: [
      {id: 0, title: 'Test'},
      {id: 1, title: 'Test 1'},
      {id: 2, title: 'Test 2'},
      {id: 3, title: 'Test 3 super long'}
    ],
    upcoming: null,
    nowplaying: null,
    popular: null
  }

  componentWillMount() {
    Services.getUpcomingMovies().then(response => {
      this.setState({upcoming: response.results});
    });
    Services.getNowPlaying().then(response => {
      this.setState({nowplaying: response.results});
    })
    Services.getPopularMovies().then(response => {
      this.setState({popular: response.results});
    });
  }

  _keyExtractor = item => `${item.id}`;

  _renderItem = ({item}) => (
    <LargeListItem data={item} />
  );

  _renderSmallItem = ({item}) => (
    <SmallListItem data={item} />
  );

  _renderPopularItem = ({item}) => (
    <PopularListItem data={item} />
  );
  
  render() {
    return (
      <View style={[styles.container, appprep.flex]}>
        <View style={[appprep.row, styles.center]}>
          <Text style={[styles.title, appprep.flex]}>MOVIES</Text>
        </View>
        <ScrollView style={styles.scrollcontainer}>
          <View style={styles.trailers}>
            <FlatList
              data={this.state.upcoming}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              horizontal
            />
          </View>
          <View style={styles.movierow}>
            <Text style={styles.rowtitle}>Now</Text>
            <FlatList
              data={this.state.nowplaying}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderSmallItem}
              horizontal
            />
          </View>
          <View style={styles.movierow}>
            <Text style={styles.rowtitle}>Popular</Text>
            <FlatList
              data={this.state.popular}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderPopularItem}
              horizontal
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BGGREY,
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  movierow: {
    height: 290
  },
  rowtitle: {
    fontFamily: 'JosefinSans-Regular',
    color: LIGHTGREY,
    fontSize: 17,
    marginBottom: 20
  },
  center: {
    alignItems: 'center'
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 24,
    color: GREYTEXT
  },
  trailers: {
    marginTop: 20,
    height: 180
  }
});

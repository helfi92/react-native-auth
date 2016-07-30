import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render: function () {
      return (
          <View style={styles.container}>
              <Text>You can sign up here!</Text>
          </View>
      );
  }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
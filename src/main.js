import React from 'react';
import {
	StyleSheet,
	Navigator
} from 'react-native';

import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';

var ROUTES = {
	signin: Signin,
    signup: Signup
};

module.exports = React.createClass({
	renderScene: function (route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator} />;
    },
    render: function() {
		return (
			<Navigator
                style={styles.container}
                initialRoute={{ name: 'signin' }}
                renderScene={this.renderScene}
                configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
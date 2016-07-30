import React from 'react';
import {
	StyleSheet,
	Navigator
} from 'react-native';

import Signin from './components/authentication/signin';

var ROUTES = {
	signin: Signin
};

module.exports = React.createClass({
	renderScene: function (route, navigator) {
        var Component = ROUTES[route.name];
        return <Component />;
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
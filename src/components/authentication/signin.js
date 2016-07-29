import React from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
	getInitialState: function () {
        return {
            username: '',
            password: ''
        };
    },
    render: function() {
		return (
			<View style={styles.container}>
				<Text>Sign In</Text>
				<Text style={styles.label}>Username:</Text>
				<TextInput
                    style={styles.input}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username} />
				<Text style={styles.label}>Password:</Text>
				<TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password} />
                <Button text={'Sign In'} onPress={this.onPress} />
			</View>
		);
	},
    onPress: function () {
        // Log user in
    }
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		padding: 4,
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	},
	label: {
		fontSize: 18
	}
});
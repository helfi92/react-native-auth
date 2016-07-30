import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: '',
            passwordConfirmation: '',
            errorMessage: ''
        };
    },
    render: function () {
      return (
          <View style={styles.container}>
              <Text>Sign Up</Text>

              <Text style={styles.label}>Username:</Text>
              <TextInput
                  value={this.state.username}
                  onChangeText={(text) => this.setState({ username: text })}
                  style={styles.input} />
              <Text style={styles.label}>Password:</Text>
              <TextInput
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({ password: text })}
                  style={styles.input} />
              <Text style={styles.label}>Confirm Password:</Text>
              <TextInput
                  secureTextEntry={true}
                  value={this.state.passwordConfirmation}
                  onChangeText={(text) => this.setState({ passwordConfirmation: text })}
                  style={styles.input} />
              <Text style={styles.label}>{this.state.errorMessage}</Text>
              <Button text={'Signup'} onPress={this.onSignUpPress} />
              <Button text={'I have an account...'} onPress={this.onSignupPress} />
          </View>
      );
    },
    onSignUpPress: function() {
        // Sign the user up
        if (this.state.password !== this.state.passwordConfirmation) {
            return this.setState({ errorMessage: 'Your passwords do not match' });
        }

        this.props.navigator.immediatelyResetRouteStack([{ name: 'tweets' }]);
    },
    onSignupPress: function () {
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    label: {
        fontSize: 18
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    }
});
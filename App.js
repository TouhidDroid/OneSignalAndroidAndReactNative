/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  DeviceEventEmitter 
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
   
   showInCallView(){
		console.log("registering ...");
		this.addListenerOn(DeviceEventEmitter,
                       'incomingCall',
                       this.modCaller.showIncomingCall);
   }
   /*componentWillMount: function() {
		DeviceEventEmitter.addListener('keyboardWillShow', function(e: Event) {
			console.log("Event : " + e);
	});*/
}
   var modCaller = {
	   showIncomingCall: function(e: Event) {
			// InCallModule.showLog("Incoming call");
			console.log("Event : " + e);
	  }
	};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Touhid, to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
		<Button
			onPress={showInCallView}
			title="Open Incoming Call View"
			color="#841584"
			accessibilityLabel="Learn more about this purple button"
		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SettingsProps = {};
type SettingsState = {};
export default class SettingsScreen extends Component<SettingsProps, SettingsState> {

  constructor(props: SettingsProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the settings screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

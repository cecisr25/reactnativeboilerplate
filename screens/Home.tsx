import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type HomeProps = {
  navigation: {navigate: any},
};
type HomeState = {};
export default class HomeScreen extends Component<HomeProps, HomeState> {

  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home view</Text>
        <Button
          title="Go to example screen"
          onPress={() => this.props.navigation.navigate('Example', {name: 'Example'})}
        />
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

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Items from '../components/Items';
import ItemsService from '../services/ItemsService';

type HomeProps = {
  navigation: {navigate: any},
};
type HomeState = {
  items: string[]
};
export default class HomeScreen extends Component<HomeProps, HomeState> {

  constructor(props: HomeProps) {
    super(props);
    this.state = {
      items: ItemsService.getInstance().items,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home view</Text>
        <Items
          items={this.state.items}
        />
        <Button
          title="Get latest"
          onPress={() => {
            this.setState(
              {
                items: ItemsService.getInstance().items,
              }
            );
          }}
        />
        <Button
          title="Go to settings screen"
          onPress={() => this.props.navigation.navigate('Settings', {name: 'Settings'})}
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

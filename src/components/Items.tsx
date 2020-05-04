import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

type ItemsProps = {
  items: string[],
};
type ItemsState = {};

export default class Items extends Component<ItemsProps, ItemsState> {

  constructor(props: ItemsProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.items}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
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

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import ItemsService from '../services/ItemsService';
import Items from '../components/Items';

type ItemsProps = {};
type ItemsState = {
  itemsInstance: ItemsService,
  items: string[]
};
export default class ItemsScreen extends Component<ItemsProps, ItemsState> {

  constructor(props: ItemsProps) {
    super(props);
    this.state = {
      itemsInstance: ItemsService.getInstance(),
      items: ItemsService.getInstance().items,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Items
          items={this.state.items}
          />
        <Button
          title="Add item"
          onPress={() => {
            const id = this.state.itemsInstance.getAll().length + 1;
            this.state.itemsInstance.add(`Item ${id}`);
            this.setState({items: this.state.itemsInstance.items})
          }}
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

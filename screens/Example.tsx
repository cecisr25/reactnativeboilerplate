import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <Text>This is an example view</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

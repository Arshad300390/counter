import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/slices/CounterSlice';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => dispatch(increment())}
      >
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => dispatch(decrement())}
      >
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

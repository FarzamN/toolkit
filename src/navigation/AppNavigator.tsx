import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/features/counter/counterSlice';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const as = useSelector(state => state.counter.value);
  return (
    <View style={styles.container}>
      <Button
        title="plus"
        color={'red'}
        onPress={() => dispatch(increment())}
      />
      <Text>{as}</Text>
      <Button
        title="miues"
        color={'red'}
        onPress={() => dispatch(decrement())}
      />
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

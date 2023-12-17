// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import {store} from './store/store'; 


export default function App() {
  console.log(store)
  return (
    <>
    {/* // <View>
    //   <Text>ounter</Text>
    // </View> */}
      <Provider store={store}>
        <View style={{ width: '70%',  }}>
        <View style={{ backgroundColor:'green', width:'50%' }}>
          <Text>Counter</Text>
          <Counter />
        </View>
        <View>
          <Text>All right reserved</Text>
          </View>
          </View>
     </Provider> 
    </>
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

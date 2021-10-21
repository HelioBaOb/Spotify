import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'; 
import { StackMain } from './navigation/MainNavigator';
import React from 'react';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const rootReducer = combineReducers({
})
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
)

export default function App() {
  return (
    <NavigationContainer>
        <StackMain/>
    </NavigationContainer>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'; 
import { StackMain } from './navigation/MainNavigator';
import React, {useState} from 'react';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
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

  const [fontLoaded, setFontLoaded] = useState(false);

    const fetchFonts = async () =>{

        return Font.loadAsync({
            'circular-black': require('./assets/fonts/CircularStd-Black.ttf'),
            'circular-bold': require('./assets/fonts/CircularStd-Bold.ttf'),
            'circular-italic': require('./assets/fonts/CircularStd-BlackItalic.ttf'),
            'circular-book': require('./assets/fonts/CircularStd-Book.ttf'),
            'circular-boldItalic': require('./assets/fonts/CircularStd-BoldItalic.ttf')
        })
    }

    if (!fontLoaded) {
      return (
          <AppLoading
              startAsync={fetchFonts}
              onFinish={() => {
                  setFontLoaded(true);
              }}
              onError={console.warn}
          />
      );
  }

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

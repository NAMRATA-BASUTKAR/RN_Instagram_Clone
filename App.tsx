import React from 'react';
import {LogBox, SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Login from './src/screens/Login';
LogBox.ignoreAllLogs();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "white",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GluestackUIProvider config={config}>
            <Box
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}
              height="101%">
              <Login />
            </Box>
          </GluestackUIProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootStackNavigator from '@navigation/root-stack';
import {LoadingProvider} from '@context/LoadingContext';
import LoadingIndicator from '@component/common/LoadingIndicator';

export const queryClient = new QueryClient();

function App() {
  const barStyle = Platform.OS === 'android' ? 'light-content' : 'dark-content';

  return (
    <LoadingProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar barStyle={barStyle} />
          <RootStackNavigator />
          <LoadingIndicator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </LoadingProvider>
  );
}

export default App;

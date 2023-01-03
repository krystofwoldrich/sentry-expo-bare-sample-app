import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'YOUR_DSN',
  tracesSampleRate: 1.0,
  sampleRate: 1.0,
  debug: true,
  enableInExpoDevelopment: true,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Capture crash' onPress={() => Sentry.Native.captureException(new Error('Error from Expo bare workflow'))} ></Button>
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

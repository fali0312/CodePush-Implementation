/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import codePush from 'react-native-code-push';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>POWER UP 45 GB</Text>
            <Text style={styles.sectionDescription}>24 Minggu</Text>
            <Text style={styles.sectionDescription1}>12 GB/24 Minggu</Text>
            <Text style={styles.sectionDescription2}>+2 Benefit Lainnya</Text>
          </Card>
        </SafeAreaView>
        <SafeAreaView style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>POWER UP 45 GB</Text>
            <Text style={styles.sectionDescription}>24 Minggu</Text>
            <Text style={styles.sectionDescription1}>12 GB/24 Minggu</Text>
            <Text style={styles.sectionDescription2}>+2 Benefit Lainnya</Text>
          </Card>
        </SafeAreaView>
        <SafeAreaView style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>POWER UP 150 GB</Text>
            <Text style={styles.sectionDescription}>24 Minggu</Text>
            <Text style={styles.sectionDescription1}>12 GB/24 Minggu</Text>
            <Text style={styles.sectionDescription2}>+2 Benefit Lainnya</Text>
          </Card>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    paddingRight: 150,
    paddingBottom: 40,
    paddingTop: 25,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    paddingRight: 270,
    color: Colors.white,
    flex: 1,
  },
  sectionDescription1: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    paddingRight: 225,
    color: Colors.white,
    flex: 1,
  },
  sectionDescription2: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    paddingRight: 215,
    color: Colors.white,
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  card: {
    height: 210,
    width: '100%',
    backgroundColor: '#f18484',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    backgroundColor: '#db1629',
    borderRadius: 10,
  },
});

const codePushOptions = {
  updateDialog: codePush.DEFAULT_UPDATE_DIALOG,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
};

export default codePush(codePushOptions)(App);

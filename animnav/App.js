

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Tabbar from "@mindinventory/react-native-tab-bar-interaction";


const App  = () => {

  const tabs = [
    {
      name: 'Home',
      activeIcon: <Icon name="home" color="#fff" size={25} />,
      inactiveIcon: <Icon name="home" color="#4d4d4d" size={25} />
    },
    {
      name: 'list',
      activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
      inactiveIcon: <Icon name="list-ul" color="#4d4d4d" size={25} />
    },
    {
      name: 'camera',
      activeIcon: <Icon name="camera" color="#fff" size={25} />,
      inactiveIcon: <Icon name="camera" color="#4d4d4d" size={25} />
    },
    {
      name: 'Notification',
      activeIcon: <Icon name="bell" color="#fff" size={25} />,
      inactiveIcon: <Icon name="bell" color="#4d4d4d" size={25} />
    },
    {
      name: 'Profile',
      activeIcon: <Icon name="user" color="#fff" size={25} />,
      inactiveIcon: <Icon name="user" color="#4d4d4d" size={25} />
    },
  
  ];

  return (
    <SafeAreaView>
      <Tabbar
    tabs={tabs}
    tabBarContainerBackground='#6699ff'
    tabBarBackground='#fff'
    activeTabBackground='#6699ff'
    labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
    onTabChange={() => console.log('Tab changed')}
  />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

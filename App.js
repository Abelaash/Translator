import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Translate from './components/Translate';

export default function App() {
  const [currView, setCurrView] = useState('Translate');

  if(currView == 'Translate'){
    return (<Translate />);
  }
}

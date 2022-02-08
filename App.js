import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Translate from './components/Translate';
import tra from "translate-google-api";

export default function App() {
  const [currView, setCurrView] = useState('Translate');

  const result = tra(`I'm fine.`, {
    tld: "cn",
    to: "vi",
  }).then((value)=>{
    console.log(value);
  });



  if(currView == 'Translate'){
    return (<Translate />);
  }
}

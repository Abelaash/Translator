import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LanguagePicker from './LanguagePicker'; 
import LanguageButton from "./LanguageButton";

export default function Translate() {

    const [fromText, setFromText] = useState();
    const [isEditingFrom, setIsEditingFrom] = useState(false);
    const [fromLang, setFromLang] = useState();

    const [toText, setToText] = useState();
    const [isEditingTo, setIsEditingTo] = useState(false);
    const [toLang, setToLang] = useState();

  return (
    <SafeAreaView>
      <LanguageButton lang={fromLang} isEditing={isEditingFrom} setIsEditingLang={setIsEditingFrom} />
      {isEditingFrom == true ? (
        <LanguagePicker setLang={setFromLang} setIsEditingLang={setIsEditingFrom}/>
      ) : (
        <TextInput
          style={styles.textBox}
          value={fromText}
          placeholder="text to translate..."
        />
      )}
      <LanguageButton lang={toLang} isEditing={isEditingTo} setIsEditingLang={setIsEditingTo} />
      {isEditingTo == true ? (
        <LanguagePicker setLang={setToLang} setIsEditingLang={setIsEditingTo}/>
      ) : (
        <TextInput
          style={styles.textBox}
          value={toText}
          placeholder="translation will show here..."
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  langPicker:{

  },
  textBox: {

  }
});

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import LanguagePicker from './LanguagePicker'; 
import LanguageButton from "./LanguageButton";
import translate from "translate-google-api";
const windowHeight = Dimensions.get('window').height;

export default function Main() {

    const [fromText, setFromText] = useState();
    const [isEditingFrom, setIsEditingFrom] = useState(false);
    const [fromLang, setFromLang] = useState();

    const [toText, setToText] = useState();
    const [isEditingTo, setIsEditingTo] = useState(false);
    const [toLang, setToLang] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <LanguageButton
        buttonColor={"blue"}
        placeHolder={"select language"}
        lang={fromLang}
        isEditing={isEditingFrom}
        setIsEditingLang={setIsEditingFrom}
      />
      <View style={{ ...styles.box, borderColor: "blue" }}>
        {isEditingFrom == true ? (
          <LanguagePicker
            setLang={setFromLang}
            setIsEditingLang={setIsEditingFrom}
          />
        ) : (
          <TextInput
            style={styles.textBox}
            value={fromText}
            placeholder="type here..."
            onChangeText={setFromText}
            onEndEditing={async () => {
              await translate(fromText, {
                tld: fromLang.code,
                to: toLang.code,
              })
                .then((value) => {
                  setToText(value[0]);
                })
                .catch((e) => {
                  setToText("sorry, error");
                });
            }}
          />
        )}
      </View>
      <LanguageButton
        buttonColor={"green"}
        placeHolder={"select language"}
        lang={toLang}
        isEditing={isEditingTo}
        setIsEditingLang={setIsEditingTo}
      />
      <View style={{ ...styles.box, borderColor: "green" }}>
        {isEditingTo == true ? (
          <LanguagePicker
            setLang={setToLang}
            setIsEditingLang={setIsEditingTo}
          />
        ) : (
          <TextInput
            style={styles.textBox}
            value={toText}
            placeholder="or type here...."
            onChangeText={setToText}
            onEndEditing={async () => {
              await translate(toText, {
                tld: toLang.code,
                to: fromLang.code,
              })
                .then((value) => {
                  setFromText(value[0]);
                })
                .catch((e) => {
                  setFromText("sorry, error");
                });
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  box:{
    flex: 2,
    borderWidth: 3,
    borderTopWidth: 0,
    marginBottom: 20,
    padding: 20,
  },
  textBox: {
    fontSize: 20,
  }
});

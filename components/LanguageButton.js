import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function LanguageButton({lang, isEditing, setIsEditingLang}) {
    return (
      <TouchableOpacity
        style={styles.langButton}
        onPress={() => {setIsEditingLang(isEditing == true ? false : true);}}
      >
        <Text style={styles.langButtonText}>
          {lang == null ? "language to translate from" : lang.title}
        </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  langButton: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
  },
  langButtonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
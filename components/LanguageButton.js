import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function LanguageButton({lang, setIsEditingLang}) {
    return (
      <TouchableOpacity
        style={styles.langButton}
        onPress={setIsEditingLang(true)}
      >
        <Text style={styles.langButtonText}>
          {lang == null ? "language to translate from" : lang}
        </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  langButton: {

  },
  langButtonText: {

  },
});
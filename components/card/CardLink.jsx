import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../consts/colors";
import { View } from "react-native";

export default function CardLink() {
  return (
    <TouchableOpacity onPress={() => console.log('CardLink clicked')}>
      <View style={styles.container}>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginRight: 20,
    width: 215 * 0.85,
    height: 300 *0.85,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});
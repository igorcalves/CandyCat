import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../consts/colors";

export default function DateFilter() {

  const card = (title) =>{
    return (
      <TouchableOpacity onPress={() => console.log('CardLink clicked')}>
        <View style={styles.card}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  return (
    <View style={styles.container}>
      {card('Hoje')}
      {card('Última semana')}
      {card('Último mes')}
      {card('Todas')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: 80,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 50,
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 10,
    fontFamily: "Inter-ExtraBold",
  },
});
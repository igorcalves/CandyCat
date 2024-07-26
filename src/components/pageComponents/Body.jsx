import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../consts/colors";
import CardLink from "../card/CardLink";
import AtualizationCard from "../card/AtualizationCard";
import DateFilter from "../filter/DateFilter";

export default function Body({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: colors.softBlue,
  },
});

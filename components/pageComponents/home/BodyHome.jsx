import { ScrollView, StyleSheet, Text } from "react-native";
import CardLink from "../../card/CardLink";
import colors from "../../../consts/colors";
import { View } from "react-native";
import DateFilter from "../../filter/DateFilter";
import AtualizationCard from "../../card/AtualizationCard";

export function BodyHome({
  navigation,
}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        <CardLink navigation={navigation} screen = {'Tasks'}/>
        <CardLink navigation={navigation} screen={'Money'}/>
        <CardLink navigation={navigation} screen={'Shopping'}/>
      </ScrollView>
      <Text style={styles.title}>Ultimas Atualizações</Text>
      <DateFilter />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
        {Array.from({length: 10}).map((_, index) => (
          <AtualizationCard key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    padding: 20,
    marginTop: 3,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  cardContainer: {
    padding: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 20,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
  },
});

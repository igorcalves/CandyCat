import { StyleSheet, View } from "react-native";
import Header from "../components/pageComponents/Header";
import Body from "../components/pageComponents/Body";
import colors from "../consts/colors";

export default function TemplatePage({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        width: '100%',
    },
})
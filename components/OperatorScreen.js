import { StyleSheet, Text, View } from "react-native";

export default function OperatorScreen(){
    return(
        <View style={styles.container}>
            <Text>Számláló</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hi Ying ur my bubba</Text>
            <Text>your BUTTTTT is nice</Text>
            <Image
                style={styles.image}
                source={{
                    uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZe4g2c3QZMbVPeRcohes8fesioiPM0FnxhA&usqp=CAU`,
                }}
            />
            <StatusBar style="auto" />
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
    image: {
        width: 300,
        height: 300,
    },
});

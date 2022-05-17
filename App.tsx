import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApplicationProvider } from '@ui-kitten/components';
import { DetailsScreen } from 'src/screens/Details';
import { HomeScreen } from 'src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
    );
}

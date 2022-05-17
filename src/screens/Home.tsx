import { Button, Layout, Text } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }: any) => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">HELLO YING</Text>
        <Button onPress={() => navigation.navigate('Details')}>Press Me</Button>
    </Layout>
);

import {View, Text} from 'react-native';
import MisionesList from './components/Misiones/MisionesList';

const Home = () => {
    return(
        <View style={{flex: 1}}>
            <Text>
                Holiwis desde el componente de casita
            </Text>
            <MisionesList />
        </View>
    )
}

export default  Home


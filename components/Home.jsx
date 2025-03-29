import {View, Text} from 'react-native';
import MisionesList from './components/Misiones/MisionesList';
import BusquedaScreen from './Busqueda/BusquedaScreen.jsx';
import LogrosScreen from './Logros/LogrosScreen.jsx';
import PerfilScreen from './Perfil/PerfilScreen.jsx';   

const Home = () => {
    return(
        <View style={{flex: 1}}>
            <Text>
                Holiwis desde el componente de casita
            </Text>
            <PefilScreen/>
        </View>
    )
}

export default  Home


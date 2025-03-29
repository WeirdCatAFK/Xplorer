import { View, Text, StyleSheet } from "react-native";
//Dani
import ReadNFC from "./ReadNFC.jsx";
// Cesar
import Gemini from './Gemini.jsx';
// Meli
import Header from './Header.jsx';
import Bienvenida from './Bienvenida.jsx';
import MissionCard from "./Misiones/MissionCard.jsx";
import MissionList from './Misiones/MissionList.jsx';
import MissionScreen from './Misiones/MissionScreen.jsx';
//Ivie
import BusquedaScreen from './Busqueda/BusquedaScreen.jsx';
import PerfilScreen from './Perfil/PerfilScreen.jsx';
import Logros from './Logros/LogrosScreen.jsx';
const Index = () => {
  return (
    <ReadNFC></ReadNFC>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Index;

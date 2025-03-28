import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window'); // Obtiene dimensiones de la pantalla

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>CacomiXplorer</Text>
      <Text style={styles.points}>5</Text>
    </View>
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
      <TextInput 
        placeholder="Buscar una ubicación" 
        placeholderTextColor="#fff" 
        style={styles.input} 
      />
    </View>
  </SafeAreaView>
);

const MissionsScreen = () => <View style={styles.screen}><Text>Misiones</Text></View>;
const ProfileScreen = () => <View style={styles.screen}><Text>Perfil</Text></View>;
const AchievementsScreen = () => <View style={styles.screen}><Text>Logros</Text></View>;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'Misiones') iconName = 'location';
          else if (route.name === 'Perfil') iconName = 'person';
          else if (route.name === 'Logros') iconName = 'trophy';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f4a261',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Misiones" component={MissionsScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Logros" component={AchievementsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f7c774', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: "100%", 
    height: "100%" 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '90%', 
    marginTop: height * 0.05 // Ajuste dinámico según pantalla
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#5a3e1b' },
  points: { fontSize: 18, color: '#5a3e1b' },
  searchBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f4a261', 
    padding: 12, 
    borderRadius: 20, 
    width: '90%', 
    marginTop: height * 0.02 // Espaciado dinámico
  },
  input: { 
    flex: 1, 
    color: '#fff', 
    paddingLeft: 10, 
    fontSize: 16 
  },
  searchIcon: { marginLeft: 5 },
  screen: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    width: "100%", // Se asegura de que ocupe toda la pantalla
    height: "100%"
  },
});

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from "expo-font";
import Header from "../../components/Header";


const activities = [
  { id: 1, title: 'Descubre la historia de la peña' },
  { id: 2, title: 'Toma una foto en lo más alto que puedas' },
  { id: 3, title: 'Escanea en el turibot' },
];

const MissionScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Delius-Regular": require("../../assets/fonts/Delius-Regular.ttf"),
          "LilitaOne-Regular": require("../../assets/fonts/LilitaOne-Regular.ttf"),
        });
        console.log("Fuentes cargadas correctamente");
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error cargando fuentes", error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF9D23" />
      </View>
    );
  }

  const toggleActivity = (id) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    
    <ScrollView>
      <Header/>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Misión: Hablando con los dioses</Text>
        <Text style={styles.titlee}>Ubicación de la misión</Text>
        
        <Image 
          source={{ uri: "https://media-public.canva.com/hHbnI/MAEtbehHbnI/1/tl.jpg" }} 
          style={styles.mapImage} 
          resizeMode="cover"
        />

        <Text style={styles.sectionTitle}>Detalles de la misión</Text>
        <Text style={styles.description}>La Peña de Bernal es un monolito de origen volcánico ubicado en el estado de Querétaro, México. Con aproximadamente 433 metros de altura sobre el nivel del pueblo de Bernal, es considerado uno de los monolitos más grandes del mundo.</Text>
        <Text style={styles.sectionTitle}>Actividades</Text>
        {activities.map((activity) => (
          <View key={activity.id} style={styles.activityContainer}>
            <TouchableOpacity onPress={() => toggleActivity(activity.id)}>
              <MaterialIcons
                name={!!completed[activity.id] ? 'check-circle' : 'radio-button-unchecked'}
                size={24}
                color={!!completed[activity.id] ? 'orange' : 'gray'}
              />
            </TouchableOpacity>
            <Text style={styles.activityText}>{activity.title}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Regresar</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#fff' 
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#F93827', 
    fontFamily: "Delius-Regular", 
    marginTop: 5,
  },

  titlee: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#FF9D23', 
    marginTop: 10, 
    fontFamily: "LilitaOne-Regular" 
  },

  mapImage: { 
    height: 200, 
    width: "100%", 
    borderRadius: 10, 
    marginVertical: 10 
  },
  
  sectionTitle: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginTop: 10, 
    color: '#FF9D23', 
    fontFamily: "LilitaOne-Regular"
  },

  description: { 
    fontSize: 14, 
    color: '#666', 
    marginVertical: 12, 
    fontFamily: "Delius-Regular",
    backgroundColor: 'white',  
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 1,
    boxShadow: "1px 8px 7px #9E9E9E" 

  },

  activityContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10, 
    backgroundColor: 'white',  
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 1,
    boxShadow: "1px 8px 7px #9E9E9E",
    

  },

  activityText: {
     marginLeft: 10, 
     fontSize: 16, 
     fontFamily: "Delius-Regular"
  },

  backButton: { 
    backgroundColor: '#16C47F', 
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
    marginTop: 15 
  },

  backButtonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontFamily: "LilitaOne-Regular"
  },
});

export default MissionScreen;

import Constants from 'expo-constants';
import axios from 'axios';
import jsonData from '../assets/logros.json'; // Ahora es un array

console.log("Contenido de jsonData:", jsonData);

const GEMINI_API_KEY = Constants.expoConfig.extra.GEMINI_API_KEY;
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';

export const getGeminiResponse = async (question) => {
    try {
        console.log("llega");

        // Convierte el array en texto para el prompt
        const dataString = JSON.stringify(jsonData, null, 2); // null y 2 para formato legible
        console.log(dataString);

        const prompt = `Información: ${dataString}. Responde según estos datos: ${question}`;

        const response = await axios.post(
            `${BASE_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            },
            { headers: { 'Content-Type': 'application/json' } }
        );

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error en la API de Gemini:', error);
        return 'Error al procesar la solicitud';
    }
};

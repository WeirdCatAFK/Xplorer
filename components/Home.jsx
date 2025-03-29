import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { getGeminiResponse } from './GeminiWrapper';

const Home = () => {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [eyesClosed, setEyesClosed] = useState(false); // Estado para los ojos cerrados

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setEyesClosed(true); // Cierra los ojos
            setTimeout(() => setEyesClosed(false), 200); // Abre los ojos después de 200ms
        }, 3000); // Parpadea cada 3 segundos

        return () => clearInterval(blinkInterval); // Limpia el intervalo al desmontar
    }, []);

    const handleGenerate = async () => {
        setIsThinking(true);
        const response = await getGeminiResponse(inputText);
        setResponseText(response);
        simulateTyping(response);
        setIsThinking(false);
    };

    const simulateTyping = (text) => {
        setDisplayedText('');
        let index = 0;
        let typedText = '';

        const interval = setInterval(() => {
            if (index < text.length) {
                typedText += text[index];
                setDisplayedText(typedText);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    };

    return (
        <View style={styles.container}>
            <View style={styles.blackBox}>
                {eyesClosed ? (
                    <View style={styles.closedEye}>
                        <View style={styles.closedEyeLine}></View>
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                        <View style={styles.eye}></View>
                        <View style={styles.eye}></View>
                    </View>
                )}
            </View>
            <Text style={styles.title}>TurisBot</Text>
            <TextInput
                style={styles.input}
                placeholder="Pregunta algo sobre el lugar"
                value={inputText}
                onChangeText={setInputText}
            />
            <View style={styles.buttonContainer}>
                <Button title="Preguntar al TurisBot" onPress={handleGenerate} color="#16C47F" />
            </View>
            <Text style={styles.responseTitle}>Respuesta:</Text>
            {isThinking ? (
                <Text style={styles.thinking}>Pensando...</Text>
            ) : (
                <Text style={styles.response}>{displayedText}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    blackBox: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    eye: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    closedEye: {
        width: 20,
        height: 20, // Mantén la misma altura que los ojos abiertos
        backgroundColor: '#000', // Fondo negro para simular el cierre
        borderRadius: 5, // Mantén la misma forma
        justifyContent: 'center',
        alignItems: 'center',
    },
    closedEyeLine: {
        width: 20,
        height: 5,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF9D23',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    buttonContainer: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    responseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF9D23',
        marginBottom: 10,
    },
    thinking: {
        fontSize: 16,
        color: '#999',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    response: {
        fontSize: 16,
        color: '#666',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
});

export default Home;
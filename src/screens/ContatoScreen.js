import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';


export default function ContatoScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');


    const enviarContato = () => {
        if (!nome || !email || !mensagem) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }
        Alert.alert("Sucesso", `Valeu ${nome}, mensagem enviada!`);
        setNome(''); setEmail(''); setMensagem('');
    };


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Contate-se conosco!</Text>


            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui seu nome..."
                    placeholderTextColor="#666"
                    value={nome}
                    onChangeText={setNome}
                />


                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: joao@email.com"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />


                <Text style={styles.label}>Mensagem</Text>
                <TextInput
                    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Como podemos melhorar sua experiência no CineBox?"
                    placeholderTextColor="#666"
                    multiline
                    value={mensagem}
                    onChangeText={setMensagem}
                />


                <TouchableOpacity style={styles.botao} onPress={enviarContato}>
                    <Text style={styles.botaoTexto}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        padding: 20
    },
    titulo: {
        color: '#e50914',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label: {
        color: '#fff',
        marginBottom: 5
    },
    input: {
        backgroundColor: '#181818',
        color: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#e509146b'
    },
    botao: {
        backgroundColor: '#e50914',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

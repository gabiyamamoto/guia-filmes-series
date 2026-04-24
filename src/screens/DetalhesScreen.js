import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function DetalhesScreen({ route, navigation }) {
    const { item } = route.params;


    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity
                style={styles.botaoVoltar}
                onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="#fff" />
                <Text style={styles.textoVoltar}>Ir para catálogo de streamings</Text>
            </TouchableOpacity>


            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{item.nome}</Text>
                <Text style={styles.genero}>
                    {item.categoria ? item.categoria : (item.tipo === 'filme' ? 'Filme' : 'Série')}
                </Text>


                <View style={styles.divisor} />
                <Text style={styles.labelSinopse}>Sinopse</Text>
                <Text style={styles.descricao}>
                    {item.descricao}
                </Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121217',
    },
    botaoVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    textoVoltar: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 5,
    },
    imagem: {
        width: '100%',
        height: 390,
        resizeMode: 'cover',
    },
    conteudo: {
        padding: 20,
    },
    titulo: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    genero: {
        color: '#888',
        fontSize: 14,
        marginBottom: 7,
    },
    divisor: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 15,
    },
    labelSinopse: {
        color: '#fa333d',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descricao: {
        color: '#ccc',
        fontSize: 15,
        textAlign: 'justify',
    },
});
